import { lawSuitsData } from '../mock/lawsuits.js';

export const getLawSuitByCnj = (request, response) => {
  const lawSuits = lawSuitsData;

  const { cnj } = request.query;

  if(!cnj){
    response.send(lawSuits);
  }
  else{
  const findExist = lawSuits.find((lawSuit) => lawSuit.cnj === cnj);
  if (!findExist) {
    return response.status(404).send({ error: true, msg: 'lawsuit not exist' });
  } else {
    response.send(findExist);
  }
}
};

export const getAllLawSuitByTr = (request, response) => {
  const lawSuits = lawSuitsData;

  const { tr } = request.query;

  const findExist = lawSuits.filter((lawSuit) => lawSuit.trregion === tr);
  if (!findExist) {
    return response.status(404).send({ error: true, msg: 'list of lawsuit not exist' });
  } else {
    response.send(findExist);
  }
};

export const getAllTr = (request, response) => {
    const lawSuits = lawSuitsData;
  
    const TRs = [...lawSuits.reduce((acc, cur) => acc.add(cur.trregion), new Set())]; 

    if (!TRs) {
      return response.status(404).send({ error: true, msg: 'list of lawsuit not exist' });
    } else {
      response.send(TRs);
    }
  };

