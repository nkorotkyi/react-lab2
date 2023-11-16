"use client"

import React, { useEffect, useState } from "react"
import { FixedSizeList as List } from "react-window"
import axios from "axios"

import styles from "./Table.module.scss"

const Table = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users")
        setData(response.data.users)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  console.log(data)

  const Row = ({ index, style }) => (
    <div style={style} className={styles.item}>
      <span>
        {data[index].id}. {data[index].firstName} {data[index].lastName}, age: {data[index].age}
      </span>
    </div>
  )

  return (
    <div>
      <h1>Дані з API </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <List
            height={400}
            itemCount={30}
            itemSize={50}
            width={400}
            className={styles.table}
            overscanCount={1}
          >
            {Row}
          </List>
        </div>
      )}
    </div>
  )
}

export default Table
