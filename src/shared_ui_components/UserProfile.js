import { Stack } from "@mui/material";
import { images } from "../constants";

export default function UserProfile({
  name = "Mathew John",
  otherText = "$10938.34",
  image = images.profile1,
}) {
  return (
    <div className="userProfileWrapper">
      <Stack spacing={"12px"} alignItem="center" direction="row">
        <div>
          <img src={image} alt="profile1" />
        </div>
        <div>
          <p className="paragraph name">{name}</p>
          <p className="subtitle otherText">{otherText} </p>
        </div>
      </Stack>
    </div>
  );
}
