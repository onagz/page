import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2019 - 2021"}
            title={"freelancer"}
            subTitle={"Lagos"}
            text={
              "I help startups and bussiness scale up with state of the art technologies "
            }
          />
          <ResumeItem
            year={"2015 - 2019"}
            title={"Full Stack Developer"}
            subTitle={"Tech Star"}
            text={
              "At Tech Star, i helped with creating their functional Reactjs app and also maintaining it. "
            }
          />
          <ResumeItem
            year={"2010 - 2015"}
            title={"Internship"}
            subTitle={"DSN Nigeria"}
            text={
              "during the internship,i worked on cleaning and manipulating datasets. "
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2015 - 2019"}
            title={"Computer Science Degree"}
            subTitle={"Federal University Of Agriculture,Abeokuta"}
            text={
              "During my time in the university i was a disciplined and dilligent student. "
            }
          />
          <ResumeItem
            year={"2009 - 2015"}
            title={"high school"}
            subTitle={"Federal government college,Odogbolu"}
            text={
              "studied natural sciences in high school. "
            }
          />
          <ResumeItem
            year={"2005 - 2008"}
            title={"Primary school"}
            subTitle={"omolola primary school"}
            text={
              "impressive grades. "
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
