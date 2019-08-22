workflow "Test" {
  on = "push"
  resolves = ["Lint JavaScript", "Build for production"]
}

action "Install PNPM" {
  uses = "actions/npm@master"
  args = "install -g pnpm"
}

action "Install" {
  uses = "actions/npm@master"
  needs = ["Install PNPM"]
  args = "pnpm install -D"
  runs = "npx"
}

action "Lint JavaScript" {
  uses = "actions/npm@master"
  needs = ["Install"]
  args = "run --prefix ./ lint"
}

action "Check formatting" {
  uses = "actions/npm@master"
  needs = ["Install"]
  args = "run --prefix ./ prettier"
}

action "Build for production" {
  uses = "actions/npm@master"
  needs = ["Check formatting", "Lint JavaScript"]
  args = "run --prefix ./ build"
}
