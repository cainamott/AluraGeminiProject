function Pesquisar() {
   
    let section = document.getElementById("resultados");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    if(!campoPesquisa){
        
        section.innerHTML = "Nada foi encontrado. Campo vazio." 
        return 

        }

        campoPesquisa = campoPesquisa.toLowerCase();
        
        let resultados = "";
        let titulo = "";
        let descricao = "";
        let tags = "";

        for (let dado of dados) {

            titulo = dado.titulo.toLowerCase();    
            descricao = dado.descricao.toLowerCase();
            tags = dado.tags.toLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
        resultados += `
            <div class="item-pesquisa">
            <h2>${dado.titulo}.</h2>
            <p class="descricao"> ${dado.descricao}</p>
            <p>Mais informações:</p> <a href=${dado.link} target="_blank">Site da Genius</a>
            </div>
            `;
        }
        if(!resultados){

            section.innerHTML = "Nada foi encontrado na base de dados." 
            return 
        }
    


       
        
        
        
    }

    section.innerHTML = resultados;
}