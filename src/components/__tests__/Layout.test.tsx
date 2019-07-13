import React from "react"
import { render } from "@testing-library/react"

import Layout from "../Layout"

test("Layout component is rendered correctly", () => {
  const { getByText } = render(
    <Layout title="Title" metaValues={{}}>
      <div>
        <h1>Hello World</h1>
      </div>
    </Layout>
  )

  expect(getByText("Hello World")).toBeDefined()
})
