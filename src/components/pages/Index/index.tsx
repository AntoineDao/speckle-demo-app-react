import React from 'react'

import { Card, Col, Row } from 'antd'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Index = () => {

    const introText = `
# Welcome to Speckle inside React

# ✨ ❤️ 🕸️

## Source Code

The source code for this application is available on [GitHub](https://github.com/antoinedao/speckle-demo-app-react.git).

## User Quick Start

### Pre-requisites

- [Speckle Account](https://speckle.xyz). You must create one first if you don't have one already.

### Testing This Application
You can test this application out by logging in using the "Log In" button on the top right corner. This will take you to the main Speckle Server (https://speckle.xyz) where you can log in using your Speckle Account credentials. Once you log in, you will be redirected back to this application and you will be able to see your user information on the top right corner.

You can then view your streams by clicking on the "streams" button on the left hand side of this screen.

And that's it! It's a pretty simple application 😅

## Running This Application Locally


### Prerequisites
- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [Yarn](https://yarnpkg.com/) (version 1.22 or higher)

### Installation

To get started, clone this repository and install the dependencies:

\`\`\`bash
git clone https://github.com/antoinedao/speckle-demo-app-react.git
cd speckle-demo-app-react
yarn install
\`\`\`

### Configuration

The application requires a Speckle Server to be running and a [Speckle Application](https://speckle.guide/dev/apps.html) to be configured on the server. The application will use the \`http://localhost:3000\` URL by default, so make sure to configure the application with this URL.

This template uses the main [Speckle Server](https://speckle.xyz) by default. To use a different server, you can change the \`REACT_APP_SERVER_URL\` environment variable in the \`.env\` file.

This template also comes pre-packages with the Application id and secret for the Speckle React App Demo owned by Antoine Dao. You can use it to test the code out before creating you own Application. To use your own Application, you can change the \`REACT_APP_APP_ID\` and \`REACT_APP_APP_SECRET\` environment variables in the \`.env\` file.

## Application Structure

The application is structured as follows:

- \`src/components\` - contains the React UI components. The subfolders follow the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology:
  - \`src/components/atoms\` - contains the smallest components, such as buttons, inputs, etc.
  - \`src/components/molecules\` - contains components that are composed of atoms
  - \`src/components/organisms\` - contains components that are composed of molecules and/or atoms
  - \`src/components/templates\` - contains components that are composed of organisms, molecules and/or atoms
  - \`src/components/pages\` - contains components that are composed of templates, organisms, molecules and/or atoms
- \`src/context\` - contains React Context objects used to share authentication, user and graphql clients across the application
- \`src/hooks\` - contains an example React Hook that to featch a list of streams from the Speckle Server
- \`src/App.tsx\` - the main application component


    `


    return (
        <Row>
            <Col span={24}>
                <Card>
                    <ReactMarkdown
                        children={introText}
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        {...props}
                                        children={String(children).replace(/\n$/, '')}
                                        style={dracula}
                                        language={match[1]}
                                        PreTag="div"
                                    />
                                ) : (
                                    <code {...props} className={className}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                    />
                </Card>
            </Col>
        </Row>

    )
}

export default Index