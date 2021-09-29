import React from 'react';
import axios from 'axios'; // import library axios untuk mengambil data ke API Server

class TodoList extends React.Component {
    // 1. manage data state
    constructor(props) {
        super(props);
        this.state = {
            dbTodo: [],
            selectedIndex: null
        }
    }

    componentDidMount() {
        //  menjalankan function untuk mengambil data dari server
        this.getData()
    }

    // 2. manage function
    // fungsi untuk get data ke API
    getData = () => {
        // .then((res)=>{}) : berisi respon data jika berhasil
        // .catch((error) => {}) : berisi respon error karena gagal
        axios.get(`http://localhost:2001/toDo`)
            .then((response) => {
                // menampilkan hasil respon data dari URL
                console.log(response.data)
                this.setState({ dbTodo: response.data })
            }).catch((error) => {
                console.log(error)
            })
    }

    printToDo = () => {
        console.log("data selectedIndex", this.state.selectedIndex)
        let htmlElement = this.state.dbTodo.map((value, index) => {
            if (this.state.selectedIndex == index) {
                return (
                    <tr>
                        <th>{index + 1}</th>
                        <td><input type="text" defaultValue={value.kegiatan} ref="editKegiatan" /></td>
                        <td><input type="text" defaultValue={value.detail} ref="editDetail" /></td>
                        <td><button type="button" onClick={this.btnCancel}>Cancel</button>
                            <button type="button" onClick={this.btnSave}>Save</button>
                        </td>
                    </tr>
                )
            } else {
                return (
                    <tr>
                        <th>{index + 1}</th>
                        <td>{value.kegiatan}</td>
                        <td>{value.detail}</td>
                        <td><button type="button" onClick={() => this.btnDelete(index)}>Delete</button>
                            <button type="button" onClick={() => this.btnEdit(index)}>Edit</button>
                        </td>
                    </tr>
                )
            }
        })
        return htmlElement
    }

    btnSave = () => {
        let temp = [...this.state.dbTodo]
        temp[this.state.selectedIndex].kegiatan = this.refs.editKegiatan.value
        temp[this.state.selectedIndex].detail = this.refs.editDetail.value
        this.setState({
            dbTodo: temp,
            selectedIndex: null
        })
    }

    btnCancel = () => {
        this.setState({ selectedIndex: null })
    }

    btnEdit = (idx) => {
        // memperbarui data pada state => this.setState({namaProperty:data})
        this.setState({ selectedIndex: idx })
    }

    btnDelete = (idx) => {
        let temp = [...this.state.dbTodo]
        temp.splice(idx, 1)
        this.setState({ dbTodo: temp })
    }

    btnAdd = () => {
        // 1. ambil data dari element input berdasarkan atribute "ref"
        let kegiatan = this.refs.addKegiatan.value;
        let detail = this.refs.addDetail.value;

        // 2. duplikasi data dari state.dbTodo kedalam variable temp
        let temp = [...this.state.dbTodo];

        // 3. data kita push ke variable temp
        temp.push({ kegiatan, detail });

        // 4. data terbaru pada variable temp kita simpan kembali kedalam state.dbToDo
        this.setState({ dbTodo: temp })

        // Cara langsung
        // this.state.dbTodo.push({ kegiatan, detail })
        // this.setState({dbTodo:this.state.dbTodo})
    }

    // 3. render untuk membuat component
    render() {
        return (
            <div style={{ width: '80vw', margin: "auto", border: "1px solid gray" }}>
                <h2 style={{ textAlign: 'center' }}>To Do List</h2>
                <table style={{ margin: 'auto' }}>
                    <thead>
                        <th>No</th>
                        <th>Kegiatan</th>
                        <th>Detail</th>
                        <th>Action</th>
                    </thead>
                    <tbody >
                        {/* Panggil fungsi print datanya */}
                        {this.printToDo()}
                    </tbody>
                    <tfoot>
                        <th>#</th>
                        <th><input type="text" placeholder="Kegiatan Baru" ref="addKegiatan" /></th>
                        <th><input type="text" placeholder="Detail" ref="addDetail" /></th>
                        <th><button type="button" onClick={this.btnAdd}>Add</button></th>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default TodoList;