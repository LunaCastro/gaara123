import React, { useState, Dispatch, SetStateAction} from "react";
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"

export interface Ipage {
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)

  return (
    <>
      {
        page == 1 ?
          (<Page1 setPageI={setPage} />) :
          (<Page2 setPageI={setPage} />)
      }
    </>
  )
};