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

document.addEventListener("deviceready", onDeviceReady(), false);
function onDeviceReady() {
    var audio = new Audio('http://server01.streamingilimitado.com.br:7126/stream;');
    
    jQuery('#play').on( 'click', function() {
        if ( ! audio.paused ) {
            audio.pause();
            jQuery(this).find('img').prop('src', 'img/play-button.png');
        } else {
            audio.play();
            jQuery(this).find('img').prop('src', 'img/pause.png');
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
        window.plugins.appMinimize.minimize();
    });
}