import React from 'react';


function Terminal() {
    function getToday() {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = monthNames[today.getMonth()] //January is 0!
        const yyyy = today.getFullYear();
        today = dd + ' ' + mm + ' ' + yyyy;
        return today;
    }

    const content = (
        <div className="terminalHead2">
            <div class="consoleInfo1">C:\Users\Femi{'>'}python</div>
            <div class="consoleInfo2">Python 3.8.1 (tags/v3.8.1:1b293b6, {getToday()}) [MSC v.1916 32 bit (Intel)] on win32</div>
            <div class="consoleInfo3">Type "help", "copyright", "credits" or "license" for more information.</div>
            <div class="row1">
                <div class="console"> {'>'} </div>
                <div class="console">{'>'} </div>
                <div class="console">{'>'} </div>
                <div class="console">&nbsp;</div>
                <div class="letter">p</div>
                <div class="letter">r</div>
                <div class="letter">i</div>
                <div class="letter">n</div>
                <div class="letter">t</div>
                <div class="letter">&nbsp;</div>
                <div class="letter">(</div>
                <div class="letter">m</div>
                <div class="letter">y</div>
                <div class="letter">S</div>
                <div class="letter">k</div>
                <div class="letter">i</div>
                <div class="letter">l</div>
                <div class="letter">l</div>
                <div class="letter">s</div>
                <div class="letter">)</div>
            </div>
            <div class="row2">
                <div class="letter">Front-end:</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - ReactJs</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - CSS</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - JavaScript</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - ReactJs</div>
            </div>
            <div class="row2">
                <div class="letter">Back-end:</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - NodeJs</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - Java</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - C++</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - C#</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - Python</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - SocketIO </div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - Spring</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - ReactNative   </div>
            </div>
            <div class="row2">
                <div class="letter">Databases:</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - PostgreSQL</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - MySql</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - MongoDB</div>
            </div>
            <div class="row2">
                <div class="letter">&nbsp; - Firebase</div>
            </div>
            <div class="row3">
                <div class="console">{'>'} </div>
                <div class="console">{'>'} </div>
                <div class="console">{'>'} </div>
                <div class="console">&nbsp;</div>
                <div class="letter"> </div>
                <div class="cursor"></div>
            </div>
        </div>
    )
    return (
        <div>
            {content}
        </div>
    );
}

export default Terminal;