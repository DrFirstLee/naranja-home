import React from "react";

// import { footerText } from "../constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                    <div>강원도 고성군 간성읍</div>
                    <div>사업자등록번호 : 686-14-02226</div>
                    <div>대표이사 : 장정권</div>
                </h2>
                {/* <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="/">sign up</a>
                        </div>
                        <p className="desc">회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.dsec}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div> */}
                <div className="footer__right">
                    &copy; 2024 주식회사 메디아나랑하<br />
                    
                </div>
  
            </div>
        </footer>
    )
}

export default Footer;