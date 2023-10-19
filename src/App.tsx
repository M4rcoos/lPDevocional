import  * as C from "./AppStyles.tsx"

function App() {

  return (
    <C.Container>
    <C.Content>
      <C.Header>
      <img src="src/assets/foguinho.png" width={130} height={130} alt="foguinho" />
      <div style={{marginBottom:-45}}>
      <img src="src/assets/raio.png" width={160} height={180} alt="raio" />
      </div>
      </C.Header>
      <C.Title>
      Estude a bíblia de maneira simples e divertida
      </C.Title>
      <C.Footer>

      <img src="src/assets/tres-coracoes.png" width={210} height={145}alt="tres corações" />
      <img src="src/assets/biblia.png"  width={180} height={170} alt="icone de uma biblia" />
      <img src="src/assets/createdBy.png"  width={300} height={200}alt="ticket" />
      </C.Footer>
    </C.Content>
       <C.Enquete>
       <img src="src/assets/enquete00.png" alt="tres corações"  />
       <img src="src/assets/enquete01.png" alt="tres corações" />
       </C.Enquete>
    </C.Container>
  )
}

export default App
