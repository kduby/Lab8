/**
 * @jest-environment jsdom
 */
import {pushToHistory} from '../scripts/router.js';



test('length of the history stack is correct', () => {
    pushToHistory("settings",1);
    pushToHistory("settings",2);
    
    //history.length starts at 1
    //Checking if history.length == 4
    expect(pushToHistory("settings",3).length).toBe(4);
});

describe('branch', () => {
    test('settings is correct', () => {
        //Settings branch
        pushToHistory("settings", 4);
        expect(history.state).toEqual({page: 'settings'});
    });
    test('entry is correct', () => {
        //Entry branch
        pushToHistory("entry", 5);
        expect(history.state).toEqual({page: 'entry5'});
    });
    test('custom is correct', () => {
        //Custom branch
        pushToHistory("swag", 6);
        expect(history.state).toEqual({});
    });
  
});

