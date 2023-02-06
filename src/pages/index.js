import Dropdown from 'react-bootstrap/Dropdown';

export default function Home() {
  return (
   <>
    <div className="d-flex mb-3">
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </div>

   <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
   </>
  )
}
