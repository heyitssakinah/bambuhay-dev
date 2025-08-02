import * as React from "react"
import { graphql } from "gatsby"
import { Container, Box, Kicker, Heading, Text } from "./ui"
import ProjectAim from "./project-aim"

export default function ProjetAimList(props) {
  return (
    <Container width="fullbleed">
      <Box background="muted" radius="large">
        <Box center paddingY={5}>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>
        {props.content.map((aim, i) => (
          <ProjectAim key={aim.id} {...aim} flip={Boolean(i % 2)} />
        ))}
      </Box>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageProjectAimListContent on HomepageProjectAimList {
    id
    kicker
    heading
    text
    content {
      id
      ...HomepageProjectAimContent
    }
  }
`
