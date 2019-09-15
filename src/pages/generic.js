import React from "react";
import Page from "../components/layouts/page";
import pic4 from "../images/pic4.jpg";

const GenericPage = () => (
  <Page title="A Generic Page" image={pic4}>
    <p>
      Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor
      imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo
      mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec
      urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum
      convallis elit. Pellentesque enim turpis, hendrerit tristique.
    </p>
    <p>
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
      sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id
      ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis,
      hendrerit tristique lorem ipsum dolor.
    </p>
  </Page>
);

export default GenericPage;
