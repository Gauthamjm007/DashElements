import { withRouter } from "react-router-dom";
import { Container } from "@mui/material";
import { Header, Navigation } from "../shared_elements";

export default function pageLayoutHoc(HocComponent, extraProps = {}) {
  function PageLayout() {
    return (
      <>
        <div className="mainBg" />
        <main>
          <Container maxWidth="lg">
            <Header />
            <Navigation />
            <HocComponent {...extraProps} />
          </Container>
        </main>
      </>
    );
  }

  return withRouter(PageLayout);
}
