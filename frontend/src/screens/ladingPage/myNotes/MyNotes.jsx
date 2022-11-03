import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../../components/MainScreen";
import axios from "axios"

const MyNotes = () => {
const fetchNotes = async() => {
  const data = await axios.get('http://localhost:3000/api/notes')
  console.log(data)
}
useEffect(() => {
  fetchNotes()
}, [])

  return (
    <MainScreen title="Welcome back Muhaz...">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginbottom: 6 }} size="lg">
          Create new Note
        </Button>
      </Link>
      <Card style={{ margin: 10 }}>
        <Card.Header style={{ display: "flex" }}>
          <span
            style={{
              color: "white",
              textDecoration: "none",
              flex: 1,
              cursor: "pointer",
              alignSelf: "center",
              fontSize: 18,
            }}
          >
            Title
          </span>
          <div>
            <Button>Edit</Button>
            <Button variant="danger" className="mx-2">
              Delete
            </Button>
          </div>
        </Card.Header>
      </Card>
    </MainScreen>
  );
};

export default MyNotes;
