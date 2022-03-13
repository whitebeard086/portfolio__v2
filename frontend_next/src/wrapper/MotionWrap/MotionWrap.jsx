import { Motion } from "./MotionWrapStyles";

const MotionWrap = (Component) => function HOC() {
  return (
    <Motion
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
    >
        <Component />
    </Motion>
  )
}

export default MotionWrap