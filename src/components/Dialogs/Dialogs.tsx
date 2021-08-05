import React from 'react';
import s from './Dialogs.module.css'

const Dialogs= ()=> {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={`${s.dialog} ${s.active}`}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    John
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Bob
                </div>
            </div>
            <div className={s.massages}>
                <div className={s.message}>Hello,how are you?</div>
                <div className={s.message}>
                    Are you busy now?
                </div>
                <div className="message">
                    Today I have a party:)
                </div>
            </div>
        </div>
    );
}

export default Dialogs