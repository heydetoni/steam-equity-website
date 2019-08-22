workflow "Test" {
  on = "push"
  resolves = ["Lint JavaScript", "Build for production"]
}

action "Install PNPM" {
  uses = "actions/npm@master"
  args = "install -g pnpm"
}

action "Install" {
  uses = "actions/bin/sh@master"
  needs = ["Install PNPM"]
  args = "pnpm install -D"
}

action "Lint JavaScript" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  args = "run lint"
}

action "Check formatting" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  args = "run prettier"
}

action "Build for production" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Check formatting", "Lint JavaScript"]
  args = "run build"
}
