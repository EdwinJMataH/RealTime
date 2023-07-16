import './bootstrap';

//Para canales publicos
// Echo.channel('notifications')
//Para canales privados
Echo.private('notifications')
    .listen('UserSessionChanged', (event)=> {
        const notification = document.getElementById('notification');

        notification.innerText = event.message
        notification.classList.remove('alert-success');
        notification.classList.remove('alert-danger');
        notification.classList.remove('invisible');
        notification.classList.add('alert-'+event.type);

    });
