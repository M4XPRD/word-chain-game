import { GameRules } from '../types/gameRules';

const rules: GameRules[] = [
  { key: 'first', text: 'Запрещается повторение городов.' },
  {
    key: 'second',
    text: 'Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого бы пропускаем эту букву и игрок должен назвать город на букву стоящую перед ъ или ь знаком.',
  },
  {
    key: 'third',
    text: 'Каждому игроку дается 2 минуты на размышления, если спустя это время игрок не вводит слово он считается проигравшим.',
  },
];

export default rules;