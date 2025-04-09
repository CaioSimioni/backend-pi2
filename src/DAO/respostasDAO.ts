import mongodb, { ObjectId } from 'mongodb';

let respostas: any;

class RespostasDAO {
    static async injectDB(conn:any){
        if (respostas){
            return
        }
        try {
          respostas = await conn.db(process.env.DATABASE).collection("respostas");
        } catch (e) {
            console.error(`Não foi possível estabelecer conexão com o banco de dados de partidas ${e}`)
        }
    };

    static async postarResposta(resposta: any) {
      console.log(resposta);
        try {
            const novaResposta = await respostas.insertOne(resposta);
            
            return novaResposta;
        } catch (error) {  
            console.error(`Erro postando resposta. Erro: ${error}`)
        }
        
    };
    
    static async apagarTudo(){
        try {
            const apagarTudo = await respostas.deleteMany({});
            return apagarTudo;
        } catch (error) {
            console.error(`Erro deletando respostas. Erro: ${error}`)            
        }
    };
};

export { RespostasDAO };