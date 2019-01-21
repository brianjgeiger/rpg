import { action } from '@ember-decorators/object';
import Component from '@ember/component';
import { htmlSafe } from '@ember/string';

import { baseEngModifiers, createGrammar } from 'tracery-grammar';

import { names } from './names';
import { personality } from './personality';
import { races } from './races';

export default class NpcGenerator extends Component {
    story: String = '';
    grammar = createGrammar({
        'name': names,
        'personalityTrait': personality,
        'description': [ `
                <p>#npc.capitalize# is #wealth.a# #socialClass# #race# who speaks in #formality.a# manner.
                #npcThey.capitalize# #npcHas# #skin# skin and #eyes# eyes.</p>
                <p>#npcThey.capitalize# address others: #addressesOthers#.</p>
                <p>#npcTheir.capitalize# self-perception is #personalityTrait#, but others say: #personalityTrait#.</p>
                <table>
                    <tr>
                        <td>CHA</td > <td>#CHA#</td>
                    </tr >
                    <tr>
                        <td>INT</td><td>#INT#</td>
                    </tr>
                    <tr>
                        <td>WIS</td><td>#WIS#</td>
                    </tr>
                    <tr>
                        <td>STR</td><td>#STR#</TD>
                    </tr>
                    <tr>
                        <td>DEX</td><td>#DEX#</td>
                    </tr>
                    <tr>
                        <td>CON</td><td>#CON#</td>
                    </tr>
                </table>
            `
        ],
        'setPronouns': [
            '[npcThey:they][npcThem:them][npcTheir:their][npcTheirs:theirs][npcWas:were][npcIs:are][npcHas:have]',
            '[npcThey:she][npcThem:her][npcTheir:her][npcTheirs:hers][npcWas:was][npcIs:is][npcHas:has]',
            '[npcThey:he][npcThem:him][npcTheir:his][npcTheirs:his][npcWas:was][npcIs:is][npcHas:has]'
        ],
        'setRace': races,
        'formality': [
            'formal',
            'informal',
        ],
        'socialClass': [
            'noble',
            'minor noble',
            'former soldier',
            'commoner',
            'commoner',
            'commoner',
            'commoner',
        ],
        'wealth': [
            'extremely wealthy',
            'wealthy',
            'wealthy',
            'middle class',
            'middle class',
            'middle class',
            'poor',
            'poor',
            'extremely poor',
        ],
        'addressesOthers': [
            'normally',
            'normally',
            'normally',
            'normally',
            'normally',
            'normally',
            'normally',
            'normally',
            'normally',
            'nicknames',
            'full name',
            'last name',
            'titles',
            'no nicknames',
            'familial referencing',
            'insults',
            'Homeric epithets',
        ],
        'npc': [
            '#[#setPronouns#][#setRace#][#setOccupation#][npc:#name#][CHA:#modifierDistribution#][INT:#modifierDistribution#][WIS:#modifierDistribution#][CON:#modifierDistribution#][STR:#modifierDistribution#][DEX:#modifierDistribution#]description#',
        ],
        'modifierDistribution': [
            '-4',
            '-3',
            '-3',
            '-2',
            '-2',
            '-2',
            '-1',
            '-1',
            '-1',
            '-1',
            '0',
            '0',
            '0',
            '0',
            '0',
            '1',
            '1',
            '1',
            '1',
            '2',
            '2',
            '2',
            '3',
            '3',
            '4',
        ]
    });
    
    init() {
        super.init();
        this.grammar.addModifiers(baseEngModifiers);
        this.set('story', htmlSafe(this.grammar.flatten('#npc#')));
    }

    @action
    another() {
        this.set('story', htmlSafe(this.grammar.flatten('#npc#')));
    }
};
