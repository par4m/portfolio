import { Spacer, Text, Button, Link } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { GithubIcon } from "../icons/github-icon";
import { GmailIcon } from "../icons/gmail-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

import { SectionAnimation } from "../animations/section";

export const Footer = () => {
  return (
    <Box>
      <SectionAnimation delay={0.3}>
        {/* Center-align the Contact section */}
        <Box
          css={{
            mb: "$5",
            pt: "$16",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center-align horizontally
            textAlign: "center", // Center-align text
          }}
        >
          <Box
            as={"ul"}
            css={{
              m: 0,
              p: 0,
              display: "flex",
              gap: "$4",
              alignItems: "center",
              flexWrap: "nowrap",
              overflowX: "auto",
              "@xsMax": {
                flexWrap: "wrap",
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
                  icon={<GmailIcon />}
                  ripple={false}
                  css={{ pl: "$3" }}
                >
                  paramarora1405@gmail.com
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </SectionAnimation>

      <Spacer css={{ mt: "0 !important" }} />
      <Flex justify={"center"}>
        <Text span>© 2025 Param Arora. All Rights Reserved.</Text>
      </Flex>
      <Spacer y={2} />
    </Box>
  );
};
