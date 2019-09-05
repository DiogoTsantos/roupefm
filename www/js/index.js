/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

document.addEventListener("deviceready", onDeviceReady, false);
var audio = new Audio('http://server01.streamingilimitado.com.br:7126/stream;');

function onDeviceReady() {
    document.addEventListener("online", appOnline, false);
    document.addEventListener("offline", appOffline, false);

    cordova.plugins.backgroundMode.enable();
    cordova.plugins.backgroundMode.setDefaults({
        title: 'Tocando as Melhores Músicas',
        text: '',
    });

    if ( isAppOnline() ) {
        audio.play();
        jQuery('#play img').prop('src', 'img/pause.png');
    }

    jQuery('#play').on( 'click', function() {
        if ( ! audio.paused ) {            
            audio.pause();
            jQuery(this).find('img').prop('src', 'img/play-button.png');
        } else {
            if ( isAppOnline() ) {
                audio.play();
                jQuery(this).find('img').prop('src', 'img/pause.png');
            }
        }
    });

    jQuery('#contato').on( 'click', function() {
        jQuery('#aba-social').fadeOut();
        jQuery('#aba-contato').fadeToggle();
    });

    jQuery('#social').on( 'click', function() {
        jQuery('#aba-contato').fadeOut();
        jQuery('#aba-social').fadeToggle();
    });

    jQuery('#minimize').on( 'click', function() {
        cordova.plugins.backgroundMode.moveToBackground();
    });
}

function isAppOnline() {
    if ( ! navigator.onLine ) {       
        return false;
    }
    return true;
}

function appOffline() {
    navigator.notification.alert(
        'Sua conexão está offline, verifique-a e tente novamente.',
        '',
        'Conexão Offline',
        'OK'
    );
    navigator.notification.beep(1);
}

function appOnline() {
    audio.pause();
    audio = new Audio('http://server01.streamingilimitado.com.br:7126/stream;');
    audio.play();
    if ( ! audio.paused ) {
        jQuery('#play img').prop('src', 'img/pause.png');
    }
}