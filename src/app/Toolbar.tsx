const Toolbar = () => {
    return (
      <div style={{ position: 'absolute', bottom: '20px', left: '20px', backgroundColor: 'white', padding: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <button style={{ margin: '5px' }}>Trovoada</button>
        <button style={{ margin: '5px' }}>Satélite</button>
        <button style={{ margin: '5px' }}>Localização</button>
      </div>
    );
  };
  
  export default Toolbar;
  