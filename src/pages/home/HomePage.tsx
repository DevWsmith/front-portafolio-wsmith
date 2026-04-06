import { Button } from "../../shared/components/common/button/index";

export const HomePage = () => {
  return (
    <div className="m-4 flex flex-col gap-3">
      <Button.Primary onClick={() => console.log("Holaa")}>
        Primary
      </Button.Primary>
      <Button.Secondary onClick={() => console.log("Holaa")}>
        Secondary
      </Button.Secondary>
    </div>
  );
};
