import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html: html,
    css: css,
    js: js,
    react: react,
    redux: redux,
    sass: sass,
    tailwind: tailwind,
    bootstrap: bootstrap,
    vscode: vscode,
    postman: postman,
    npm: npm,
    git: git,
    github: github,
    figma: figma,
    reactnatove:reactnative,
    next:next,
    vue:vue,
    typescript:typescript,
    node:node,
    mongodb:mongodb,
    postgresql:postgresql,
    graphql:graphql,
    solidity:solidity,
    rust:rust,
    etherjs:etherjs,
    junit:junit,
    azure:azure, 
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="html" />
        <img src={css} title="CSS" alt="css" />
        <img src={js} title="JavaScript" alt="javascript" />
        <img src={typescript} title="Typscript" alt="typescript" />
        <img src={react} title="React" alt="react" />
        <img src={redux} title="Redux" alt="redux" />
        <img src={reactnative} title="React Native" alt="reactnative" />
        <img src={vue} title="Vue" alt="vue"/>
        <img src={next} title="Next" alt="next"/>
        <img src={node} title="Node" alt="node"/>
        <img src={postgresql} title="PostgreSQL" alt="postgresql"/>
        <img src={mongodb} title="MongoDB" alt="mongodb"/>
        <img src={graphql} title="GraphQL" alt="praphql"/>
        <img src={azure} title="Azure" alt="azure"/>
        <img src={junit} title="Junit" alt="junit"/>
        <img src={etherjs} title="Etherjs" alt="etherjs"/>
        <img src={solidity} title="Solidity" alt="solidity"/>
        <img src={rust} title="Rust" alt="rust"/>
        <img src={tailwind} title="Tailwind CSS" alt="tailwind" />
        <img src={bootstrap} title="Bootstrap" alt="bootstrap" />
        <img src={sass} title="SASS" alt="sass" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
