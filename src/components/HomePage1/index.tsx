import QueueAnim from "rc-queue-anim";
import checked from "@/assets/checked.svg";
import card from "@/assets/card.png";
import bg from "@/assets/bgCricle.svg";
import "./index.less";
import { message } from "antd";
const tags = ["BRC20", "Runes", "Atomicals", "MRC20"];
export default () => {
  return (
    <div className="homePage1">
      <div className="bg">
        <img src={bg} alt="" />
      </div>
      <div className="contentWrap">
        <div className="left">
          <QueueAnim delay={300} ease="easeOutQuart" className="leftAnmi">
            <p key="p1" className="title">
              Greater Bitcoin{" "}
            </p>
            <p key="p2" className="title">
              Assets <span className="colorPrimary">Router</span>{" "}
            </p>
            <p key="p3" className="title">
              Protocol
            </p>
            <p key="p" className="subTitle">
              The Bridge Between Multiple UTXO Chains
            </p>
            <div className="tags" key="tag">
              {tags.map((tag) => (
                <div className="tag" key={tag}>
                  <img src={checked} alt="" className="checked" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
            <div className="buttonWrap" key="btns">
              <div className="button primary" onClick={() => {
                message.info({ content: "coming soon",icon: "🚀", });
              }}>Wrapping</div>
              <div className="button line" onClick={() => {
                message.info({ content: "coming soon" ,icon: "🚀",});
              }}>Mapping</div>
            </div>
          </QueueAnim>
        </div>
        <QueueAnim delay={700} ease="easeOutQuart" className="right">
          <img key="card" src={card} alt="card" className="right" />
        </QueueAnim>
      </div>
    </div>
  );
};
