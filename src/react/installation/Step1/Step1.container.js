import React from 'react';
import { connect } from 'react-redux';
import { selectors as i18nSelectors } from '../../store/i18n';
import { selectors as initSelectors } from '../../store/init';
import { selectors as constantSelectors } from '../../store/constants';
import { actions, selectors } from '../store/';
import Step1 from './Step1.component';

const mapStateToProps = (state) => ({
	i18n: i18nSelectors.getI18n(state),
	constants: constantSelectors.getConstants(state),
	availableLanguages: initSelectors.getLanguageList(state),
	language: selectors.getLanguage(state)
});

const mapDispatchToProps = (dispatch) => ({
	onSelectLanguage: (lang) => dispatch(actions.selectLanguage(lang))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Step1);
