import classNames from "classnames";
import React, {
  memo,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./scss/ProgressBar.scss";

const style = require("./scss/ProgressBar.scss");
const cx = classNames.bind(style);

const ProgressBar = memo((): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const handleProgressMove = useCallback(
    (e: MouseEvent<HTMLDivElement>): void => {
      if (progressRef.current !== null) {
        const { scrollWidth } = progressRef.current;
        const { clientX } = e;

        const selectedPercent: number = (clientX / scrollWidth) * 100;
        setWidth(selectedPercent);

        const { scrollHeight, clientHeight } = document.body;
        const windowHeight: number = scrollHeight - clientHeight;

        const moveScrollPercent: number =
          (windowHeight * selectedPercent) / 100;

        window.scrollTo({
          top: moveScrollPercent,
          behavior: "smooth",
        });
      }
    },
    []
  );

  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      setWidth(0);
      return;
    }

    const windowHeight: number = scrollHeight - clientHeight;
    const currentPercent: number = scrollTop / windowHeight;

    setWidth(currentPercent * 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <div
      className={cx("ProgressBar")}
      ref={progressRef}
      onClick={handleProgressMove}
    >
      <div
        className={cx("ProgressBar-Progress")}
        style={{ width: width + "%" }}
      ></div>
    </div>
  );
});

export default ProgressBar;
