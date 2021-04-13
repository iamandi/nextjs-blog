import utilStyles from "../styles/scroll_animation.module.css";
import ScrollingColorBackground from "react-scrolling-color-background";

const green = "#10e88a";
const purple = "#7f3995";
const blue = "#0d78e7";
const orange = "#f88f18";
const pink = "#bb6774";
const tealRgb = "rgb(32, 202, 172)";
const skyRgb = "rgb(60, 191, 246)";
const blueRgb = "rgb(10, 34, 236)";
const COLORS = [green, purple, blue, orange, pink];

export default function Scroll() {
  return (
    <>
      <ScrollingColorBackground
        selector='.js-color-stop[data-background-color]'
        colorDataAttribute='data-background-color'
        initialRgb='rgb(0, 0, 0)'
      />
      {COLORS.map((rgbString, idx) => (
        <section
          key={idx}
          className='js-color-stop'
          data-background-color={rgbString}
          style={{ height: "100vh" }}
        />
      ))}

      <article className={utilStyles.article} id='one' data-color='#10e88a'>
        <h1 className={utilStyles.h1}>Lorem</h1>
        <p className={utilStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          consequat pretium odio ac vulputate. Nullam vitae diam id erat
          interdum dignissim. Nam eget faucibus metus. Pellentesque vitae nibh
          non mi ultrices rhoncus. Aliquam vestibulum ut massa vitae congue.
          Aliquam mauris neque, eleifend sit amet elit ut, placerat iaculis
          velit. Suspendisse potenti. Cras interdum interdum porttitor. Aenean
          ac enim vitae metus fringilla malesuada. Duis pharetra enim nulla, non
          eleifend ante lobortis ac. Duis quis purus lorem. Sed mattis massa ac
          nisl faucibus sagittis. Ut posuere velit massa, et malesuada elit
          condimentum ut. Integer lacinia risus ut ante cursus, sed porttitor
          nisl suscipit. Aliquam non ultricies massa. Donec vehicula sem at nisl
          lacinia ultrices.
        </p>{" "}
        <div className={utilStyles.clear}></div>
      </article>
      <article className={utilStyles.article} id='two' data-color='#7f3995'>
        <h1 className={utilStyles.h1}>Ipsum</h1>
        <p className={utilStyles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          consequat pretium odio ac vulputate. Nullam vitae diam id erat
          interdum dignissim. Nam eget faucibus metus. Pellentesque vitae nibh
          non mi ultrices rhoncus. Aliquam vestibulum ut massa vitae congue.
          Aliquam mauris neque, eleifend sit amet elit ut, placerat iaculis
          velit. Suspendisse potenti. Cras interdum interdum porttitor. Aenean
          ac enim vitae metus fringilla malesuada. Duis pharetra enim nulla, non
          eleifend ante lobortis ac. Duis quis purus lorem. Sed mattis massa ac
          nisl faucibus sagittis. Ut posuere velit massa, et malesuada elit
          condimentum ut. Integer lacinia risus ut ante cursus, sed porttitor
          nisl suscipit. Aliquam non ultricies massa. Donec vehicula sem at nisl
          lacinia ultrices.
        </p>{" "}
        <div className={utilStyles.clear}></div>{" "}
      </article>
      <article id='three' data-color='#0d78e7'>
        <h1>Dolor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          consequat pretium odio ac vulputate. Nullam vitae diam id erat
          interdum dignissim. Nam eget faucibus metus. Pellentesque vitae nibh
          non mi ultrices rhoncus. Aliquam vestibulum ut massa vitae congue.
          Aliquam mauris neque, eleifend sit amet elit ut, placerat iaculis
          velit. Suspendisse potenti. Cras interdum interdum porttitor. Aenean
          ac enim vitae metus fringilla malesuada. Duis pharetra enim nulla, non
          eleifend ante lobortis ac. Duis quis purus lorem. Sed mattis massa ac
          nisl faucibus sagittis. Ut posuere velit massa, et malesuada elit
          condimentum ut. Integer lacinia risus ut ante cursus, sed porttitor
          nisl suscipit. Aliquam non ultricies massa. Donec vehicula sem at nisl
          lacinia ultrices.
        </p>{" "}
        <div className={utilStyles.clear}></div>{" "}
      </article>
      <article id='four' data-color='#f88f18'>
        <h1>Sit</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          consequat pretium odio ac vulputate. Nullam vitae diam id erat
          interdum dignissim. Nam eget faucibus metus. Pellentesque vitae nibh
          non mi ultrices rhoncus. Aliquam vestibulum ut massa vitae congue.
          Aliquam mauris neque, eleifend sit amet elit ut, placerat iaculis
          velit. Suspendisse potenti. Cras interdum interdum porttitor. Aenean
          ac enim vitae metus fringilla malesuada. Duis pharetra enim nulla, non
          eleifend ante lobortis ac. Duis quis purus lorem. Sed mattis massa ac
          nisl faucibus sagittis. Ut posuere velit massa, et malesuada elit
          condimentum ut. Integer lacinia risus ut ante cursus, sed porttitor
          nisl suscipit. Aliquam non ultricies massa. Donec vehicula sem at nisl
          lacinia ultrices.
        </p>{" "}
        <div className={utilStyles.clear}></div>{" "}
      </article>
      <article id='five' data-color='#E91E63'>
        <h1>Amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          consequat pretium odio ac vulputate. Nullam vitae diam id erat
          interdum dignissim. Nam eget faucibus metus. Pellentesque vitae nibh
          non mi ultrices rhoncus. Aliquam vestibulum ut massa vitae congue.
          Aliquam mauris neque, eleifend sit amet elit ut, placerat iaculis
          velit. Suspendisse potenti. Cras interdum interdum porttitor. Aenean
          ac enim vitae metus fringilla malesuada. Duis pharetra enim nulla, non
          eleifend ante lobortis ac. Duis quis purus lorem. Sed mattis massa ac
          nisl faucibus sagittis. Ut posuere velit massa, et malesuada elit
          condimentum ut. Integer lacinia risus ut ante cursus, sed porttitor
          nisl suscipit. Aliquam non ultricies massa. Donec vehicula sem at nisl
          lacinia ultrices.
        </p>{" "}
        <div className={utilStyles.clear}></div>{" "}
      </article>
    </>
  );
}
