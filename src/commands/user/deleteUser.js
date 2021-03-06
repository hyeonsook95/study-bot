const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
        .setName('사용자삭제').setDescription('관리할 사용자의 정보를 삭제합니다.')
        .addStringOption(option => option.setName('이름').setDescription('사용자 이름').setRequired(true));

module.exports = data;