declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

import type { FC, SVGProps } from "react";

declare module "*.svg" {
  const SvgComponent: FC<SVGProps<SVGSVGElement>>;
  export default SvgComponent;
}
