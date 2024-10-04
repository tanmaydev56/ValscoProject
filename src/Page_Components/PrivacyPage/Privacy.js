import React from "react";
import { Link } from "react-scroll";
import { Link as PGLINK } from "react-router-dom";
import "./privacyPage.css";
const PrivacyPage = () => {
  return (
    <>
      <PGLINK
        to="/"
        className="nav-item"
        style={{
          border: "1px solid black",
          position: "absolute",
          top: "1rem",
          width: "fit-content",
          left: "1rem",
          padding: "0.5rem",
        }}
      >
        Home
      </PGLINK>
      <section className="privacypage-container">
        <h1>PRIVACY POLICY</h1>
        <p className="updatedOn">Last updated December 20, 2023</p>
        <section className="notice">
          This privacy notice for Valsco Technology Pvt. Ltd. ('we', 'us', or
          'our'), describes how and why we might collect, store, use, and/or
          share ('process') your information when you use our services
          ('Services'), such as when you:
          <ul type="square">
            <li>
              Download and use our mobile application (Jurident), or any other
              application of ours that links to this privacy notice
            </li>
            <li>
              Engage with us in other related ways, including any sales,
              marketing, or events
            </li>
          </ul>
          <p className="para">
            Questions or concerns? Reading this privacy notice will help you
            understand your privacy rights and choices. If you do not agree with
            our policies and practices, please do not use our Services. If you
            still have any questions or concerns, please contact us at{" "}
            <a href="mailto:connect@valscotech.com">connect@valscotech.com</a>.
          </p>
        </section>
        <section className="summary">
          <h2>SUMMARY OF KEY POINTS</h2>
          <p className="para" style={{ margin: "0" }}>
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our{" "}
            <Link to="tableOfContent"> table of contents</Link> below to find
            the section you are looking for.
          </p>
          <ul type="none">
            <li>
              <strong> What personal information do we process? </strong>When
              you visit, use, or navigate our Services, we may process personal
              information depending on how you interact with us and the
              Services, the choices you make, and the products and features you
              use. Learn more about{" "}
              <Link to="personalInfo">
                personal information you disclose to us.
              </Link>
            </li>
            <li>
              <strong>
                {" "}
                Do we process any sensitive personal information?{" "}
              </strong>
              We may process sensitive personal information when necessary with
              your consent or as otherwise permitted by applicable law. Learn
              more about{" "}
              <Link to="infoCollected">sensitive information we process.</Link>
            </li>
            <li>
              <strong>
                Do we receive any information from third parties?{" "}
              </strong>
              We may receive information from public databases, marketing
              partners, social media platforms, and other outside sources. Learn
              more about{" "}
              <Link to="infoCollected">
                information collected from other sources.
              </Link>
            </li>
            <li>
              <strong>How do we process your information? </strong>We process
              your information to provide, improve, and administer our Services,
              communicate with you, for security and fraud prevention, and to
              comply with law. We may also process your information for other
              purposes with your consent. We process your information only when
              we have a valid legal reason to do so. Learn more about{" "}
              <Link to="process"> how we process your information.</Link>
            </li>
            <li>
              <strong>
                In what situations and with which parties do we share personal
                information?{" "}
              </strong>
              We may share information in specific situations and with specific
              third parties. Learn more about{" "}
              <Link to="sharedWith">
                when and with whom we share your personal information.
              </Link>
            </li>
            <li>
              <strong>How do we keep your information safe?</strong>
              We have organisational and technical processes and procedures in
              place to protect your personal information. However, no electronic
              transmission over the internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorised
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Learn more about{" "}
              <Link to="handling">how we keep your information safe.</Link>
            </li>
            <li>
              <strong>What are your rights?</strong> Depending on where you are
              located geographically, the applicable privacy law may mean you
              have certain rights regarding your personal information. Learn
              more about
              <Link to="privacyRights">your privacy rights.</Link>
            </li>
            <li>
              <strong>How do you exercise your rights? </strong>The easiest way
              to exercise your rights is by contacting us. We will consider and
              act upon any request in accordance with applicable data protection
              laws.
            </li>
            <li>
              <strong>
                Want to learn more about what we do with any information we
                collect?
              </strong>{" "}
              Review the privacy notice in full.
            </li>
          </ul>
        </section>
        <section id="tableOfContent">
          <h2>Table of Content</h2>
          <ol type="1">
            <li>
              <Link to="whtInfo">WHAT INFORMATION DO WE COLLECT?</Link>
            </li>
            <li>
              <Link to="process">HOW DO WE PROCESS YOUR INFORMATION?</Link>
            </li>
            <li>
              <Link to="sharedWith">
                WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </Link>
            </li>
            <li>
              <Link to="handling">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</Link>
            </li>
            <li>
              <Link to="infoPeriod">HOW LONG DO WE KEEP YOUR INFORMATION?</Link>
            </li>
            <li>
              <Link to="safetyMeasures">
                HOW DO WE KEEP YOUR INFORMATION SAFE?
              </Link>
            </li>
            <li>
              <Link to="minorsInfo">
                DO WE COLLECT INFORMATION FROM MINORS?
              </Link>
            </li>
            <li>
              <Link to="privacyRights">WHAT ARE YOUR PRIVACY RIGHTS?</Link>
            </li>
            <li>
              <Link to="dntControls">CONTROLS FOR DO-NOT-TRACK FEATURES</Link>
            </li>
            <li>
              <Link to="comitment">
                WHAT IS OUR COMPANY'S COMMITMENT TO YOUR PRIVACY?
              </Link>
            </li>
            <li>
              <Link to="updates">DO WE MAKE UPDATES TO THIS NOTICE?</Link>
            </li>
            <li>
              <Link to="contactHow">
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </Link>
            </li>
            <li>
              <Link to="deleteAccount">
                HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                YOU?
              </Link>
            </li>
          </ol>
        </section>
        <section id="whtInfo">
          <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
          <div className="points" id="personalInfo">
            <h3>Personal information you disclose to us</h3>
            <p classname="para">
              <i>
                <strong>In Short: </strong>
              </i>
              We collect personal information that you provide to us.
            </p>
            <p classname="para">
              We collect personal information that you voluntarily provide to us
              when you register on the Services, express an interest in
              obtaining information about us or our products and Services, when
              you participate in activities on the Services, or otherwise when
              you contact us.
            </p>
            <div className="para">
              Personal Information Provided by You. The personal information
              that we collect depends on the context of your interactions with
              us and the Services, the choices you make, and the products and
              features you use. The personal information we collect may include
              the following:
              <ul type="square">
                <li>names</li>
                <li>phone numbers</li>
                <li>email addresses</li>
                <li>job titles</li>
                <li>contact or authentication data</li>
              </ul>
            </div>
            <div className="para">
              Sensitive Information. When necessary, with your consent or as
              otherwise permitted by applicable law, we process the following
              categories of sensitive information:
              <ul type="square">
                <li> legal data</li>
              </ul>
            </div>
            <p classname="para">
              Social Media Login Data. We may provide you with the option to
              register with us using your existing social media account details,
              like your Facebook, Twitter, or other social media account. If you
              choose to register in this way, we will collect the information
              described in the section called{" "}
              <Link to="handling">'HOW DO WE HANDLE YOUR SOCIAL LOGINS?'</Link>
              below.
            </p>
            <div className="para">
              Application Data. If you use our application(s), we also may
              collect the following information if you choose to provide us with
              access or permission:
              <ul type="square">
                <li>
                  Mobile Device Access. We may request access or permission to
                  certain features from your mobile device, including your
                  mobile device's calendar, sms messages, and other features. If
                  you wish to change our access or permissions, you may do so in
                  your device's settings.
                </li>
                <li>
                  Push Notifications. We may request to send you push
                  notifications regarding your account or certain features of
                  the application(s). If you wish to opt out from receiving
                  these types of communications, you may turn them off in your
                  device's settings.
                </li>
              </ul>
              This information is primarily needed to maintain the security and
              operation of our application(s), for troubleshooting, and for our
              internal analytics and reporting purposes.
            </div>
            <p classname="para">
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>
          </div>
          <div className="points" id="infoCollected">
            <h3>Information collected from other sources</h3>
            <p classname="para">
              <i>
                <strong>In Short: </strong>
              </i>
              We may collect limited data from public databases, marketing
              partners, social media platforms, and other outside sources.
            </p>
            <p classname="para">
              In order to enhance our ability to provide relevant marketing,
              offers, and services to you and update our records, we may obtain
              information about you from other sources, such as public
              databases, joint marketing partners, affiliate programs, data
              providers, social media platforms, and from other third parties.
              This information includes mailing addresses, job titles, email
              addresses, phone numbers, intent data (or user behaviour data),
              Internet Protocol (IP) addresses, social media profiles, social
              media URLs, and custom profiles, for purposes of targeted
              advertising and event promotion. If you interact with us on a
              social media platform using your social media account (e.g.
              Facebook or Twitter), we receive personal information about you
              such as your name, email address, and gender. Any personal
              information that we collect from your social media account depends
              on your social media account's privacy settings.
            </p>
          </div>
        </section>
        <section id="process">
          <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
          <p classname="para">
            <i>
              <strong>In Short: </strong>
            </i>
            We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention,
            and to comply with law. We may also process your information for
            other purposes with your consent
          </p>
          <div className="para">
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
            <ul type="square">
              <li>
                To facilitate account creation and authentication and otherwise
                manage user accounts. We may process your information so you can
                create and log in to your account, as well as keep your account
                in working order.
              </li>
              <li>
                To deliver and facilitate delivery of services to the user. We
                may process your information to provide you with the requested
                service.
              </li>
              <li>
                To protect our Services. We may process your information as part
                of our efforts to keep our Services safe and secure, including
                fraud monitoring and prevention.
              </li>
              <li>
                To evaluate and improve our Services, products, marketing, and
                your experience. We may process your information when we believe
                it is necessary to identify usage trends, determine the
                effectiveness of our promotional campaigns, and to evaluate and
                improve our Services, products, marketing, and your experience.
              </li>
            </ul>
          </div>
        </section>
        <section id="sharedWith">
          <h2>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
          <p classname="para">
            <i>
              <strong>In Short: </strong>
            </i>
            We may share information in specific situations described in this
            section and/or with the following third parties.
          </p>
          <div className="para">
            We may need to share your personal information in the following
            situations:
            <ul type="square">
              <li>
                Business Transfers. We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of
                company assets, financing, or acquisition of all or a portion of
                our business to another company.
              </li>
            </ul>
          </div>
        </section>
        <section id="handling">
          <h2>4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
          <p classname="para">
            <i>
              <strong>In Short: </strong>
            </i>
            If you choose to register or log in to our Services using a social
            media account, we may have access to certain information about you.
          </p>
          <p classname="para">
            Our Services offer you the ability to register and log in using your
            third-party social media account details (like your Facebook or
            Twitter logins). Where you choose to do this, we will receive
            certain profile information about you from your social media
            provider. The profile information we receive may vary depending on
            the social media provider concerned, but will often include your
            name, email address, friends list, and profile picture, as well as
            other information you choose to make public on such a social media
            platform.
          </p>
          <p classname="para">
            We will use the information we receive only for the purposes that
            are described in this privacy notice or that are otherwise made
            clear to you on the relevant Services. Please note that we do not
            control, and are not responsible for, other uses of your personal
            information by your third-party social media provider. We recommend
            that you review their privacy notice to understand how they collect,
            use, and share your personal information, and how you can set your
            privacy preferences on their sites and apps.
          </p>
        </section>
        <section id="infoPeriod">
          <h2>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          <p classname="para">
            <i>
              <strong>In Short: </strong>
            </i>
            We keep your information for as long as necessary to fulfil the
            purposes outlined in this privacy notice unless otherwise required
            by law.
          </p>
          <p classname="para">
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements). No purpose in this
            notice will require us keeping your personal information for longer
            than the period of time in which users have an account with us.
          </p>
          <p classname="para">
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymise such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </p>
        </section>
        <section id="safetyMeasures">
          <h2>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
          <p classname="para">
            <i>
              <strong>In Short: </strong>
            </i>
            We aim to protect your personal information through a system of
            organisational and technical security measures.
          </p>
          <p classname="para">
            We have implemented appropriate and reasonable technical and
            organisational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cybercriminals, or other unauthorised third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Services is at your own risk. You should
            only access the Services within a secure environment.
          </p>
        </section>
        <section id="minorsInfo">
          <h2>7. DO WE COLLECT INFORMATION FROM MINORS?</h2>
          <p classname="para">
            <i>
              <strong>In Short: </strong>
            </i>
            We do not knowingly collect data from or market to children under 18
            years of age.
          </p>
          <p classname="para">
            We do not knowingly solicit data from or market to children under 18
            years of age. By using the Services, you represent that you are at
            least 18 or that you are the parent or guardian of such a minor and
            consent to such minor dependent’s use of the Services. If we learn
            that personal information from users less than 18 years of age has
            been collected, we will deactivate the account and take reasonable
            measures to promptly delete such data from our records. If you
            become aware of any data we may have collected from children under
            age 18, please contact us at{" "}
            <a href="mailto:connect@valscotech.com">connect@valscotech.com</a> .
          </p>
        </section>
        <section id="privacyRights">
          <h2>8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          <p classname="para">
            <i>
              <strong>In Short: </strong>
            </i>
            You may review, change, or terminate your account at any time.
          </p>
          <p classname="para">
            <u>Withdrawing your consent:</u> If we are relying on your consent
            to process your personal information, which may be express and/or
            implied consent depending on the applicable law, you have the right
            to withdraw your consent at any time. You can withdraw your consent
            at any time by contacting us by using the contact details provided
            in the section{" "}
            <Link to="contactHow">
              'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'
            </Link>{" "}
            below.
          </p>
          <p classname="para">
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal nor, when applicable law allows,
            will it affect the processing of your personal information conducted
            in reliance on lawful processing grounds other than consent.
          </p>
          <h3>Account Information</h3>
          <div className="para">
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
            <ul type="square">
              <li>
                Log in to your account settings and update your user account.
              </li>
              <li>Contact us using the contact information provided.</li>
            </ul>
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may retain some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our legal terms and/or comply with applicable legal
            requirements.
          </div>
          <p classname="para">
            If you have questions or comments about your privacy rights, you may
            email us at{" "}
            <a href="mailto:connect@valscotech.com">connect@valscotech.com</a> .
          </p>
        </section>
        <section id="dntControls">
          <h2>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          <p classname="para">
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track ('DNT') feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage no uniform technology standard for recognising and
            implementing DNT signals has been finalised. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this privacy notice.
          </p>
        </section>
        <section id="comitment">
          <h2>10. WHAT IS OUR COMPANY'S COMMITMENT TO YOUR PRIVACY?</h2>
          <p classname="para">
            We can not access to your data. Your own data is safe and secure, no
            one apart from you can view,edit or delete your data. We ensure and
            provide the Blockchain algorithm to provide the security to you
            information.{" "}
          </p>
        </section>
        <section className="updates">
          <h2>11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
          <p classname="para">
            <i>
              <strong>In Short: </strong>Yes, we will update this notice as
              necessary to stay compliant with relevant laws.
            </i>
          </p>
          <p classname="para">
            We may update this privacy notice from time to time. The updated
            version will be indicated by an updated 'Revised' date and the
            updated version will be effective as soon as it is accessible. If we
            make material changes to this privacy notice, we may notify you
            either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this
            privacy notice frequently to be informed of how we are protecting
            your information.
          </p>
        </section>
        <section className="contactHow">
          <h2>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
          <p classname="para">
            If you have questions or comments about this notice, you may email
            us at{" "}
            <a href="mailto:connect@valscotech.com">connect@valscotech.com</a>{" "}
            or contact us by post at:
          </p>
          <p classname="para">
            <span>Valsco Technology Pvt. Ltd.</span>
            <span>J-3 SHATABDI ENCLAVE</span>
            <span>NOIDA, UTTAR PRADESH 201301 India</span>
          </p>
        </section>
        <section className="deleteAccount">
          <h2>
            13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </h2>
          <p classname="para">
            Please send us a mail regarding this concern at{" "}
            <a href="mailto:connect@valscotech.com">connect@valscotech.com</a>{" "}
            and we will update you with appropriate response as soon as
            possible.
          </p>
        </section>
      </section>
    </>
  );
};

export default PrivacyPage;
