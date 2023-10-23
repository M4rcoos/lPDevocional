import  * as C from "./AppStyles.tsx"
import { ButtonLarger } from "./components/ButtonLarger"


function App() {

  return (
    <C.Container>
    <C.Content>
      <C.Header>
      <C.ImageFire />
      <div className="flash" style={{marginBottom:-45}}>
      <C.ImageFlash/>
      </div>
      </C.Header>
      <C.Title>
      Estude a bíblia de maneira simples e divertida
      </C.Title>
      <C.Footer>

     <C.ImageHeart/>
      <C.Biblia/>
      <C.CreatedBy/>
      </C.Footer>
    </C.Content>
       <C.Enquete>
       <img src="src/assets/enquete00.png" width={480} alt="Enquete instagram"  />
       <img src="src/assets/enquete01.png" width={480} alt="Enquete instagram" />
       </C.Enquete>
       <C.TextParabolas>
        <img src="src/assets/imgfirstText-removebg-preview.png" alt="tres corações" />
        <img src="src/assets/description_parabolas-removebg-preview.png" alt="tres corações" />
       </C.TextParabolas>
       <ButtonLarger name="Porquê adquirir um ebook digital?"/>
       <C.Motivos>
       <div>
        <img src="src/assets/01-removebg-preview.png"/>
       </div>
       <div>
        <img src="src/assets/02-removebg-preview.png" />
       </div>
       <div>
        <img src="src/assets/03-removebg-preview.png"/>
       </div>
       </C.Motivos>
       <C.Organization>
       <img src="src/assets/space.png"/>
       </C.Organization>
    </C.Container>
  )
}

export default App
