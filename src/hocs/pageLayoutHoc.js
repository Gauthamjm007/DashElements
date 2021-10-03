import React from "react";

import { withRouter } from "react-router-dom";

export default function pageLayoutHoc(HocComponent, extraProps = {}) {
  function PageLayout() {
    return (
      <>
        <main>
          <div>
            <HocComponent {...extraProps} />
          </div>
        </main>
      </>
    );
  }

  return withRouter(PageLayout);
}
