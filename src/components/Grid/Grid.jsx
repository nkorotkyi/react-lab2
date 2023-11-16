"use client"

import React, { useState } from "react"
import styles from "./Grid.module.scss"

const Grid = () => {
  const [selectedCell, setSelectedCell] = useState(null)

  const handleClick = (row, col) => {
    setSelectedCell({ row, col })
  }

  return (
    <div className={styles.container}>
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th colspan="9">
              <h2>Sudoku Board</h2>
            </th>
          </tr>
        </thead>
        <tbody className={styles.grid}>
          {[...Array(8)].map((_, row) => (
            <tr key={row}>
              {[...Array(8)].map((_, col) => (
                <td
                  key={col}
                  onClick={() => handleClick(row, col)}
                  style={{
                    background:
                      selectedCell && selectedCell.row === row && selectedCell.col === col
                        ? "lightblue"
                        : "white",
                  }}
                  className={styles.column}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Grid
