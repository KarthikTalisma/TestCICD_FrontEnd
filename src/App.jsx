import { useState } from 'react'
import GaugeComponent from 'react-gauge-component';
import './App.css'
import { DataGrid } from '@mui/x-data-grid';

function App() {
  const [count, setCount] = useState(50)

  return (
    <>
      <h2 style={{ margin: '20px 0' }}>Gauge Component</h2>
      <div>
        <button onClick={() => setCount((count) => count + 10)}>
          count is {count}
        </button>
      </div>
      <GaugeComponent
                    value={count || 0}
                    type="radial"
                    labels={{
                      tickLabels: {
                        ticks: [
                          { value: 20 },
                          { value: 40 },
                          { value: 60 },
                          { value: 80 },
                          { value: 100 }
                        ],
                        style: {
                          tickLength: 0  // This removes the tick lines
                        }
                      },
                      valueLabel: {
                        style: {
                          fontSize: "60px",
                          fontWeight: "400",
                          fill: "#000000",
                          fontFamily: "Lexend",
                          textShadow: "none"
                        },
                        formatTextValue: () => `${count || 0}`
                      }
                    }}
                    arc={{
                      colorArray: ['#5BE12C', '#EA4228'],
                      subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}],
                      padding: 0.05,
                      width: 0.13,
                      cornerRadius: 0
                    }}
                    pointer={{
                      elastic: true,
                      animationDelay: 0,
                      type: "blob",
                      animate: true
                    }}
                  />

                  <DataGrid
                    columns={[
                      { field: 'id', headerName: 'ID', flex: 3 },
                      { field: 'firstName', headerName: 'First name', flex: 1 },
                      { field: 'lastName', headerName: 'Last name' },
                      { field: 'age', headerName: 'Age', type: 'number' },
                      {
                        field: 'fullName',
                        headerName: 'Full name',
                        description: 'This column has a value getter and is not sortable.',
                        sortable: false,

                        renderCell: (params) =>
                          `${params.row.firstName || ''} ${params.row.lastName || ''}`,
                      },
                    ]}
                    rows={[
                      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
                      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
                      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
                    ]}
                    pageSizeOptions={[{value: 3, label: '3'},{value: 5, label: '5'}, {value: 10, label: '10'}, {value: 20, label: '20'}]}
                            disableRowSelectionOnClick
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 3,
                                    },
                                },
                            }}
                            sx={{
                                borderRadius: 3,
                                border: 'none',
                                backgroundColor: '#fff',
                                '& .MuiDataGrid-columnHeaders': {
                                background: 'linear-gradient(to right, #7c3aed, #a855f7)',
                                color: '#000',
                                fontWeight: 600,
                                fontFamily :'Lexend',
                                fontSize: '14px',
                                },
                                '& .MuiDataGrid-cell': {
                                },
                            }}
                  />
    </>
  )
}

export default App
