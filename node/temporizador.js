const schedule = require('node-schedule')

//                                    s m h ms d a -> */ (por segundo)
const tarefa1 = schedule.scheduleJob('*/5 4 4 * * 3', function () {
    console.log("VÁ DORMIR DIACHO!!!", new Date().getSeconds());
})

// Esperando 20 segundos para cancelar a ação
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Mensagem de Boa noite');
}, 20000);

// Definindo uma regra que irá executar de segunda á sexta ás 12 horas e 30 segundos
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 14
regra.second = 12

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log(`Boa tarde, Tupi! São: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
})
