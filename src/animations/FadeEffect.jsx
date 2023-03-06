import { Fade } from "react-awesome-reveal";

const FadeEffect = (props) => {
  return (
    <>
      <Fade>{props.children}</Fade>
    </>
  )
}

export default FadeEffect;