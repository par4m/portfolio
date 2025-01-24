import { Text, Avatar, Card, Button, Link } from "@nextui-org/react";
import { Box } from "../../styles/box";
import { Flex } from "../../styles/flex";
import { GithubIcon } from "../../icons/github-icon";
import { GmailIcon } from "../../icons/gmail-icon";
import { LinkedinIcon } from "../../icons/linkedin-icon";
import { SectionAnimation } from "../../animations/section";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { LinkIcon } from "../../icons/link-icon";
import { GridContainer } from "../../styles/grid";

const SkillItem = ({ icon, skill }) => (
  <Box
    as={"li"}
    css={{
      display: "flex",
      alignItems: "center",
      gap: "$4",
      p: "$4",
      borderRadius: "$md",
      backgroundColor: "$accents1",
      "&:hover": {
        transform: "scale(1.05)",
        transition: "transform 0.2s ease",
      },
    }}
  >
    {icon} {/* Render the icon */}
    <Text span css={{ fontWeight: "$semibold" }}>
      {skill}
    </Text>
  </Box>
);
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGit,
  FaJava,
} from "react-icons/fa";
import {
  SiRedis,
  SiApachekafka,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiRust,
  SiGo,
  SiPytorch,
  SiWebassembly,
  SiAmazondynamodb,
} from "react-icons/si";

import { TbBrandSocketIo } from "react-icons/tb";
export const Home = () => {
  const router = useRouter();

  return (
    <Box css={{ px: "$12", "@xsMax": { px: "$10" }, width: "100%" }}>
      <Card variant="flat" css={{ marginBottom: "$10" }}>
        <Card.Body css={{ backgroundColor: "$accents2" }}>
          <Text css={{ fontFamily: "inherit", textAlign: "center" }} as={"p"}>
            Hello, I&apos;m Param. I&apos;m a software engineer based in
            Gurgaon, India!
          </Text>
        </Card.Body>
      </Card>
      <Flex justify={"between"} css={{ pb: "$10" }}>
        <Box css={{ alignSelf: "center" }}>
          <Text h2 css={{ my: "$0" }}>
            Param Arora
          </Text>
          <Text css={{ fontFamily: "inherit" }}>
            Software Engineer ( Backend / DevOps / ML )
          </Text>
        </Box>

        <Avatar
          css={{ "--nextui--avatarXl": "7.5rem" }}
          pointer
          bordered
          size={"xl"}
          src="pfp.jpg"
        />
      </Flex>
      <SectionAnimation delay={0.1}>
        <Box css={{ mb: "$10" }}>
          <Text h3>About</Text>
          <Text
            span
            css={{
              textIndent: "0em",
              display: "block",
            }}
          >
            I am a backend developer with a passion for building scalable
            systems and contributing to open-source projects. Proficient in Rust
            and Golang, I enjoy working on high-performance, concurrent
            applications. I also have a keen interest in machine learning,
            leveraging AI to solve real-world problems. Whether it’s optimizing
            backend infrastructure or exploring innovative ML solutions, I
            thrive on creating efficient, reliable, and impactful software.
          </Text>

          <Flex justify={"center"} css={{ mt: "$8" }}>
            <NextLink href="/projects">
              <Link block css={{ gap: "$4" }}>
                Projects <LinkIcon />
              </Link>
            </NextLink>
          </Flex>
        </Box>
      </SectionAnimation>
      <SectionAnimation delay={0.2}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Experience</Text>

          <Box as={"ul"} css={{ m: 0 }}>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                Dec 2024 - Jan 2025
              </Text>
              <Text span>Backend Intern At Web Globe India</Text>
            </Box>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                Sep 2024 - Nov 2024
              </Text>
              <Text span>ML Intern At Invisible Mechanics(Unacademy)</Text>
            </Box>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                May 2024 - July 2024
              </Text>
              <Text span>SDE Intern at Indian Oil Corporation (IOC)</Text>
            </Box>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                Nov 2023 - April 2024
              </Text>
              <Text span>Open Source Developer At ReacherHQ</Text>
            </Box>
          </Box>
        </Box>
      </SectionAnimation>
      <br />
      <SectionAnimation delay={0.2}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Education</Text>

          <Box as={"ul"} css={{ m: 0 }}>
            <Box as={"li"} css={{ textIndent: "-3.4em", pl: "3.4em" }}>
              <Text span css={{ mr: "1em" }} weight={"bold"}>
                2022 - 2026
              </Text>
              <Text span>
                Bachelor&apos;s degree in Computer Science from MIT Manipal
              </Text>
            </Box>
          </Box>
        </Box>
      </SectionAnimation>
      <br />
      {/**/}
      {/* <SectionAnimation delay={0.3}> */}
      {/*   <Box css={{ mb: "$10" }}> */}
      {/*     <Text h3>I ❤️ </Text> */}
      {/*     <Text as={"span"} css={{ textIndent: "1em" }}> */}
      {/*       I love to learn new things, I am passionate about technology and I */}
      {/*       always try to learn something new every day, I love to solve */}
      {/*       problems and I am always looking for new challenges. */}
      {/*     </Text> */}
      {/*   </Box> */}
      {/* </SectionAnimation> */}
      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Skills</Text>

          {/* Languages */}
          <Text h4 css={{ mt: "$6", mb: "$4" }}>
            Languages
          </Text>
          <GridContainer
            as={"ul"}
            gap={"lg"}
            css={{
              m: 0,
              px: 0,
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              "@xsMax": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
            }}
          >
            <SkillItem icon={<SiGo size={20} />} skill="Go" />
            <SkillItem icon={<SiRust size={20} />} skill="Rust" />
            <SkillItem icon={<SiTypescript size={20} />} skill="TypeScript" />
            <SkillItem icon={<SiPython size={20} />} skill="Python" />
            <SkillItem icon={<FaJava size={20} />} skill="Java" />
          </GridContainer>

          {/* Frameworks */}
          <Text h4 css={{ mt: "$6", mb: "$4" }}>
            Frameworks
          </Text>
          <GridContainer
            as={"ul"}
            gap={"lg"}
            css={{
              m: 0,
              px: 0,
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              "@xsMax": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
            }}
          >
            <SkillItem icon={<FaReact size={20} />} skill="ReactJS" />
            <SkillItem icon={<SiNextdotjs size={20} />} skill="NextJS" />
            <SkillItem icon={<FaNodeJs size={20} />} skill="NodeJS" />
            <SkillItem icon={<SiPytorch size={20} />} skill="PyTorch" />
          </GridContainer>

          {/* Tools */}
          <Text h4 css={{ mt: "$6", mb: "$4" }}>
            Tools
          </Text>
          <GridContainer
            as={"ul"}
            gap={"lg"}
            css={{
              m: 0,
              px: 0,
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              "@xsMax": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
            }}
          >
            <SkillItem icon={<FaDocker size={20} />} skill="Docker" />
            <SkillItem icon={<SiApachekafka size={20} />} skill="Kafka" />
            <SkillItem icon={<SiRedis size={20} />} skill="Redis" />
            <SkillItem icon={<FaAws size={20} />} skill="AWS" />
            <SkillItem icon={<SiPostgresql size={20} />} skill="Postgres" />
            <SkillItem icon={<FaGit size={20} />} skill="Git" />
            <SkillItem
              icon={<TbBrandSocketIo size={20} />}
              skill="WebSockets"
            />
            <SkillItem icon={<SiAmazondynamodb size={20} />} skill="DynamoDB" />
          </GridContainer>
        </Box>
      </SectionAnimation>
      {/* <SectionAnimation delay={0.3}> */}
      {/*   <Box css={{ mb: "$10" }}> */}
      {/*     <Text h3>Languages</Text> */}
      {/*     <GridContainer as={"ul"} gap={"md"} css={{ m: 0, px: 0 }}> */}
      {/*       <Box as={"li"}>English </Box> */}
      {/*       <Box as={"li"}>Hindi </Box> */}
      {/*     </GridContainer> */}
      {/*   </Box> */}
      {/* </SectionAnimation> */}
      <br />
      <SectionAnimation delay={0.3}>
        <Box css={{ mb: "$10" }}>
          <Text h3>Contact</Text>
          <Box
            as={"ul"}
            css={{
              m: 0,
              display: "flex", // Use flexbox to align items horizontally
              gap: "$4", // Add spacing between items
              alignItems: "center", // Align items vertically in the center
              flexWrap: "nowrap", // Prevent wrapping
              overflowX: "auto", // Allow horizontal scrolling if needed
              "@xsMax": {
                flexWrap: "wrap", // Allow wrapping on small screens
              },
            }}
          >
            <Box as={"li"}>
              <Link
                block
                target={"_blank"}
                color="primary"
                href="https://github.com/par4m"
              >
                <Button
                  light
                  color="primary"
                  auto
                  icon={<GithubIcon />}
                  ripple={false}
                  css={{ pl: "$3" }}
                >
                  @par4m
                </Button>
              </Link>
            </Box>
            <Box as={"li"}>
              <Link
                block
                target={"_blank"}
                color="primary"
                href="https://www.linkedin.com/in/paramar"
              >
                <Button
                  light
                  color="primary"
                  auto
                  icon={<LinkedinIcon />}
                  ripple={false}
                  css={{ pl: "$3" }}
                >
                  @Param Arora
                </Button>
              </Link>
            </Box>
            <Box as={"li"}>
              <Link
                block
                target={"_blank"}
                color="primary"
                href="mailto:paramarora1405@gmail.com"
              >
                <Button
                  light
                  color="primary"
                  auto
                  icon={<GmailIcon />} // Assuming you have a GmailIcon component
                  ripple={false}
                  css={{ pl: "$3" }}
                >
                  paramarora1405@gmail.com
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </SectionAnimation>{" "}
    </Box>
  );
};
