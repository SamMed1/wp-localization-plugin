import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';

import { FormTokenField, SelectControl, ToggleControl, RichText } from '@wordpress/components';

import { useState } from '@wordpress/element';

import { MultiSelectControl } from '@codeamp/block-components';
import { withState } from '@wordpress/compose';

const MyMultiSelectControl = withState( {
	value: [],
	options: [
		{
			"af_NA": {
			  "name": "Afrikaans (Namibia)",
			  "charset": "UTF-8"
			},
			"af_ZA": {
			  "name": "Afrikaans (South Africa)",
			  "charset": "UTF-8"
			},
			"af": {
			  "name": "Afrikaans",
			  "charset": "UTF-8"
			},
			"ak_GH": {
			  "name": "Akan (Ghana)",
			  "charset": "UTF-8"
			},
			"ak": {
			  "name": "Akan",
			  "charset": "UTF-8"
			},
			"sq_AL": {
			  "name": "Albanian (Albania)",
			  "charset": "UTF-8"
			},
			"sq": {
			  "name": "Albanian",
			  "charset": "UTF-8"
			},
			"am_ET": {
			  "name": "Amharic (Ethiopia)",
			  "charset": "UTF-8"
			},
			"am": {
			  "name": "Amharic",
			  "charset": "UTF-8"
			},
			"ar_DZ": {
			  "name": "Arabic (Algeria)",
			  "charset": "UTF-8"
			},
			"ar_BH": {
			  "name": "Arabic (Bahrain)",
			  "charset": "ISO-8859-6"
			},
			"ar_EG": {
			  "name": "Arabic (Egypt)",
			  "charset": "ISO-8859-6"
			},
			"ar_IQ": {
			  "name": "Arabic (Iraq)",
			  "charset": "ISO-8859-6"
			},
			"ar_JO": {
			  "name": "Arabic (Jordan)",
			  "charset": "ISO-8859-6"
			},
			"ar_KW": {
			  "name": "Arabic (Kuwait)",
			  "charset": "ISO-8859-6"
			},
			"ar_LB": {
			  "name": "Arabic (Lebanon)",
			  "charset": "ISO-8859-6"
			},
			"ar_LY": {
			  "name": "Arabic (Libya)",
			  "charset": "ISO-8859-6"
			},
			"ar_MA": {
			  "name": "Arabic (Morocco)",
			  "charset": "ISO-8859-6"
			},
			"ar_OM": {
			  "name": "Arabic (Oman)",
			  "charset": "ISO-8859-6"
			},
			"ar_QA": {
			  "name": "Arabic (Qatar)",
			  "charset": "ISO-8859-6"
			},
			"ar_SA": {
			  "name": "Arabic (Saudi Arabia)",
			  "charset": "ISO-8859-6"
			},
			"ar_SD": {
			  "name": "Arabic (Sudan)",
			  "charset": "ISO-8859-6"
			},
			"ar_SY": {
			  "name": "Arabic (Syria)",
			  "charset": "ISO-8859-6"
			},
			"ar_TN": {
			  "name": "Arabic (Tunisia)",
			  "charset": "ISO-8859-6"
			},
			"ar_AE": {
			  "name": "Arabic (United Arab Emirates)",
			  "charset": "ISO-8859-6"
			},
			"ar_YE": {
			  "name": "Arabic (Yemen)",
			  "charset": "ISO-8859-6"
			},
			"ar": {
			  "name": "Arabic",
			  "charset": "ISO-8859-6"
			},
			"hy_AM": {
			  "name": "Armenian (Armenia)",
			  "charset": "ARMSCII-8"
			},
			"hy": {
			  "name": "Armenian",
			  "charset": "ARMSCII-8"
			},
			"as_IN": {
			  "name": "Assamese (India)",
			  "charset": "UTF-8"
			},
			"as": {
			  "name": "Assamese",
			  "charset": "UTF-8"
			},
			"asa_TZ": {
			  "name": "Asu (Tanzania)",
			  "charset": "UTF-8"
			},
			"asa": {
			  "name": "Asu",
			  "charset": "UTF-8"
			},
			"az_Cyrl": {
			  "name": "Azerbaijani (Cyrillic, Azerbaijan)",
			  "charset": "UTF-8"
			},
			"az_Cyrl_AZ": {
			  "name": "Azerbaijani (Cyrillic, Azerbaijan)",
			  "charset": "UTF-8"
			},
			"az_Latn": {
			  "name": "Azerbaijani (Latin)",
			  "charset": "UTF-8"
			},
			"az_Latn_AZ": {
			  "name": "Azerbaijani (Latin, Azerbaijan)",
			  "charset": "UTF-8"
			},
			"az": {
			  "name": "Azerbaijani",
			  "charset": "UTF-8"
			},
			"bm_ML": {
			  "name": "Bambara (Mali)",
			  "charset": "iso-8859-1"
			},
			"bm": {
			  "name": "Bambara",
			  "charset": "iso-8859-1"
			},
			"eu_ES": {
			  "name": "Basque (Spain)",
			  "charset": "ISO-8859-1"
			},
			"eu": {
			  "name": "Basque",
			  "charset": "ISO-8859-1"
			},
			"be_BY": {
			  "name": "Belarusian (Belarus)",
			  "charset": "UTF-8"
			},
			"be": {
			  "name": "Belarusian",
			  "charset": "UTF-8"
			},
			"bem_ZM": {
			  "name": "Bemba (Zambia)",
			  "charset": "UTF-8"
			},
			"bem": {
			  "name": "Bemba",
			  "charset": "UTF-8"
			},
			"bez_TZ": {
			  "name": "Bena (Tanzania)",
			  "charset": "UTF-8"
			},
			"bez": {
			  "name": "Bena",
			  "charset": "UTF-8"
			},
			"bn_BD": {
			  "name": "Bengali (Bangladesh)",
			  "charset": "UTF-8"
			},
			"bn_IN": {
			  "name": "Bengali (India)",
			  "charset": "UTF-8"
			},
			"bn": {
			  "name": "Bengali",
			  "charset": "UTF-8"
			},
			"bs_BA": {
			  "name": "Bosnian (Bosnia and Herzegovina)",
			  "charset": "UTF-8"
			},
			"bs": {
			  "name": "Bosnian",
			  "charset": "UTF-8"
			},
			"bg_BG": {
			  "name": "Bulgarian (Bulgaria)",
			  "charset": "ISO-8859-2"
			},
			"bg": {
			  "name": "Bulgarian",
			  "charset": "ISO-8859-2"
			},
			"my_MM": {
			  "name": "Burmese (Myanmar [Burma])",
			  "charset": "UTF-8"
			},
			"my": {
			  "name": "Burmese",
			  "charset": "UTF-8"
			},
			"yue_Hant_HK": {
			  "name": "Cantonese (Traditional, Hong Kong SAR China)",
			  "charset": "UTF-8"
			},
			"ca_ES": {
			  "name": "Catalan (Spain)",
			  "charset": "ISO-8859-15"
			},
			"ca": {
			  "name": "Catalan",
			  "charset": "ISO-8859-15"
			},
			"tzm_Latn": {
			  "name": "Central Morocco Tamazight (Latin)",
			  "charset": "ISO-8859-1"
			},
			"tzm_Latn_MA": {
			  "name": "Central Morocco Tamazight (Latin, Morocco)",
			  "charset": "ISO-8859-1"
			},
			"tzm": {
			  "name": "Central Morocco Tamazight",
			  "charset": "ISO-8859-1"
			},
			"chr_US": {
			  "name": "Cherokee (United States)",
			  "charset": "U+13A0"
			},
			"chr": {
			  "name": "Cherokee",
			  "charset": "U+13A0"
			},
			"cgg_UG": {
			  "name": "Chiga (Uganda)",
			  "charset": "ISO-8859-1"
			},
			"cgg": {
			  "name": "Chiga",
			  "charset": "ISO-8859-1"
			},
			"zh_Hans": {
			  "name": "Chinese (Simplified Han)",
			  "charset": "UTF-8"
			},
			"zh_Hans_CN": {
			  "name": "Chinese (Simplified Han, China)",
			  "charset": "UTF-8"
			},
			"zh_Hans_HK": {
			  "name": "Chinese (Simplified Han, Hong Kong SAR China)",
			  "charset": "UTF-8"
			},
			"zh_Hans_MO": {
			  "name": "Chinese (Simplified Han, Macau SAR China)",
			  "charset": "UTF-8"
			},
			"zh_Hans_SG": {
			  "name": "Chinese (Simplified Han, Singapore)",
			  "charset": "UTF-8"
			},
			"zh_Hant": {
			  "name": "Chinese (Traditional Han)",
			  "charset": "UTF-8"
			},
			"zh_Hant_HK": {
			  "name": "Chinese (Traditional Han, Hong Kong SAR China)",
			  "charset": "UTF-8"
			},
			"zh_Hant_MO": {
			  "name": "Chinese (Traditional Han, Macau SAR China)",
			  "charset": "UTF-8"
			},
			"zh_Hant_TW": {
			  "name": "Chinese (Traditional Han, Taiwan)",
			  "charset": "UTF-8"
			},
			"zh": {
			  "name": "Chinese",
			  "charset": "UTF-8"
			},
			"kw_GB": {
			  "name": "Cornish (United Kingdom)",
			  "charset": "ISO-8859-1"
			},
			"kw": {
			  "name": "Cornish",
			  "charset": "ISO-8859-1"
			},
			"hr_HR": {
			  "name": "Croatian (Croatia)",
			  "charset": "ISO-8859-2"
			},
			"hr": {
			  "name": "Croatian",
			  "charset": "ISO-8859-2"
			},
			"cs_CZ": {
			  "name": "Czech (Czech Republic)",
			  "charset": "ISO-8859-2"
			},
			"cs": {
			  "name": "Czech",
			  "charset": "ISO-8859-2"
			},
			"da_DK": {
			  "name": "Danish (Denmark)",
			  "charset": "ISO-8859-1"
			},
			"da": {
			  "name": "Danish",
			  "charset": "ISO-8859-1"
			},
			"nl_BE": {
			  "name": "Dutch (Belgium)",
			  "charset": "ISO-8859-15"
			},
			"nl_NL": {
			  "name": "Dutch (Netherlands)",
			  "charset": "ISO-8859-15"
			},
			"nl": {
			  "name": "Dutch",
			  "charset": "ISO-8859-15"
			},
			"ebu_KE": {
			  "name": "Embu (Kenya)",
			  "charset": "UTF-8"
			},
			"ebu": {
			  "name": "Embu",
			  "charset": "UTF-8"
			},
			"en_AS": {
			  "name": "English (American Samoa)",
			  "charset": "UTF-8"
			},
			"en_AU": {
			  "name": "English (Australia)",
			  "charset": "UTF-8"
			},
			"en_BE": {
			  "name": "English (Belgium)",
			  "charset": "UTF-8"
			},
			"en_BZ": {
			  "name": "English (Belize)",
			  "charset": "UTF-8"
			},
			"en_BW": {
			  "name": "English (Botswana)",
			  "charset": "UTF-8"
			},
			"en_CA": {
			  "name": "English (Canada)",
			  "charset": "UTF-8"
			},
			"en_GU": {
			  "name": "English (Guam)",
			  "charset": "UTF-8"
			},
			"en_HK": {
			  "name": "English (Hong Kong SAR China)",
			  "charset": "UTF-8"
			},
			"en_IN": {
			  "name": "English (India)",
			  "charset": "UTF-8"
			},
			"en_IE": {
			  "name": "English (Ireland)",
			  "charset": "UTF-8"
			},
			"en_IL": {
			  "name": "English (Israel)",
			  "charset": "UTF-8"
			},
			"en_JM": {
			  "name": "English (Jamaica)",
			  "charset": "UTF-8"
			},
			"en_MT": {
			  "name": "English (Malta)",
			  "charset": "UTF-8"
			},
			"en_MH": {
			  "name": "English (Marshall Islands)",
			  "charset": "UTF-8"
			},
			"en_MU": {
			  "name": "English (Mauritius)",
			  "charset": "UTF-8"
			},
			"en_NA": {
			  "name": "English (Namibia)",
			  "charset": "UTF-8"
			},
			"en_NZ": {
			  "name": "English (New Zealand)",
			  "charset": "UTF-8"
			},
			"en_MP": {
			  "name": "English (Northern Mariana Islands)",
			  "charset": "UTF-8"
			},
			"en_PK": {
			  "name": "English (Pakistan)",
			  "charset": "UTF-8"
			},
			"en_PH": {
			  "name": "English (Philippines)",
			  "charset": "UTF-8"
			},
			"en_SG": {
			  "name": "English (Singapore)",
			  "charset": "UTF-8"
			},
			"en_ZA": {
			  "name": "English (South Africa)",
			  "charset": "UTF-8"
			},
			"en_TT": {
			  "name": "English (Trinidad and Tobago)",
			  "charset": "UTF-8"
			},
			"en_UM": {
			  "name": "English (U.S. Minor Outlying Islands)",
			  "charset": "UTF-8"
			},
			"en_VI": {
			  "name": "English (U.S. Virgin Islands)",
			  "charset": "UTF-8"
			},
			"en_GB": {
			  "name": "English (United Kingdom)",
			  "charset": "UTF-8"
			},
			"en_US": {
			  "name": "English (United States)",
			  "charset": "UTF-8"
			},
			"en_ZW": {
			  "name": "English (Zimbabwe)",
			  "charset": "UTF-8"
			},
			"en": {
			  "name": "English",
			  "charset": "UTF-8"
			},
			"eo": {
			  "name": "Esperanto",
			  "charset": "UTF-8"
			},
			"et_EE": {
			  "name": "Estonian (Estonia)",
			  "charset": "ISO-8859-1"
			},
			"et": {
			  "name": "Estonian",
			  "charset": "ISO-8859-1"
			},
			"ee_GH": {
			  "name": "Ewe (Ghana)",
			  "charset": "ISO-8859-1"
			},
			"ee_TG": {
			  "name": "Ewe (Togo)",
			  "charset": "ISO-8859-1"
			},
			"ee": {
			  "name": "Ewe",
			  "charset": "ISO-8859-1"
			},
			"fo_FO": {
			  "name": "Faroese (Faroe Islands)",
			  "charset": "UTF-8"
			},
			"fo": {
			  "name": "Faroese",
			  "charset": "UTF-8"
			},
			"fil_PH": {
			  "name": "Filipino (Philippines)",
			  "charset": "UTF-8"
			},
			"fil": {
			  "name": "Filipino",
			  "charset": "UTF-8"
			},
			"fi_FI": {
			  "name": "Finnish (Finland)",
			  "charset": "UTF-8"
			},
			"fi": {
			  "name": "Finnish",
			  "charset": "UTF-8"
			},
			"fr_BE": {
			  "name": "French (Belgium)",
			  "charset": "UTF-8"
			},
			"fr_BJ": {
			  "name": "French (Benin)",
			  "charset": "UTF-8"
			},
			"fr_BF": {
			  "name": "French (Burkina Faso)",
			  "charset": "UTF-8"
			},
			"fr_BI": {
			  "name": "French (Burundi)",
			  "charset": "UTF-8"
			},
			"fr_CM": {
			  "name": "French (Cameroon)",
			  "charset": "UTF-8"
			},
			"fr_CA": {
			  "name": "French (Canada)",
			  "charset": "UTF-8"
			},
			"fr_CF": {
			  "name": "French (Central African Republic)",
			  "charset": "UTF-8"
			},
			"fr_TD": {
			  "name": "French (Chad)",
			  "charset": "UTF-8"
			},
			"fr_KM": {
			  "name": "French (Comoros)",
			  "charset": "UTF-8"
			},
			"fr_CG": {
			  "name": "French (Congo - Brazzaville)",
			  "charset": "UTF-8"
			},
			"fr_CD": {
			  "name": "French (Congo - Kinshasa)",
			  "charset": "UTF-8"
			},
			"fr_CI": {
			  "name": "French (Côte d’Ivoire)",
			  "charset": "UTF-8"
			},
			"fr_DJ": {
			  "name": "French (Djibouti)",
			  "charset": "UTF-8"
			},
			"fr_GQ": {
			  "name": "French (Equatorial Guinea)",
			  "charset": "UTF-8"
			},
			"fr_FR": {
			  "name": "French (France)",
			  "charset": "UTF-8"
			},
			"fr_GA": {
			  "name": "French (Gabon)",
			  "charset": "UTF-8"
			},
			"fr_GP": {
			  "name": "French (Guadeloupe)",
			  "charset": "UTF-8"
			},
			"fr_GN": {
			  "name": "French (Guinea)",
			  "charset": "UTF-8"
			},
			"fr_LU": {
			  "name": "French (Luxembourg)",
			  "charset": "UTF-8"
			},
			"fr_MG": {
			  "name": "French (Madagascar)",
			  "charset": "UTF-8"
			},
			"fr_ML": {
			  "name": "French (Mali)",
			  "charset": "UTF-8"
			},
			"fr_MQ": {
			  "name": "French (Martinique)",
			  "charset": "UTF-8"
			},
			"fr_MC": {
			  "name": "French (Monaco)",
			  "charset": "UTF-8"
			},
			"fr_NE": {
			  "name": "French (Niger)",
			  "charset": "UTF-8"
			},
			"fr_RW": {
			  "name": "French (Rwanda)",
			  "charset": "UTF-8"
			},
			"fr_RE": {
			  "name": "French (Réunion)",
			  "charset": "UTF-8"
			},
			"fr_BL": {
			  "name": "French (Saint Barthélemy)",
			  "charset": "UTF-8"
			},
			"fr_MF": {
			  "name": "French (Saint Martin)",
			  "charset": "UTF-8"
			},
			"fr_SN": {
			  "name": "French (Senegal)",
			  "charset": "UTF-8"
			},
			"fr_CH": {
			  "name": "French (Switzerland)",
			  "charset": "UTF-8"
			},
			"fr_TG": {
			  "name": "French (Togo)",
			  "charset": "UTF-8"
			},
			"fr": {
			  "name": "French",
			  "charset": "UTF-8"
			},
			"ff_SN": {
			  "name": "Fulah (Senegal)",
			  "charset": "UTF-8"
			},
			"ff": {
			  "name": "Fulah",
			  "charset": "UTF-8"
			},
			"gl_ES": {
			  "name": "Galician (Spain)",
			  "charset": "ISO-8859-1"
			},
			"gl": {
			  "name": "Galician",
			  "charset": "ISO-8859-1"
			},
			"lg_UG": {
			  "name": "Ganda (Uganda)",
			  "charset": "UTF-8"
			},
			"lg": {
			  "name": "Ganda",
			  "charset": "UTF-8"
			},
			"ka_GE": {
			  "name": "Georgian (Georgia)",
			  "charset": "UTF-8"
			},
			"ka": {
			  "name": "Georgian",
			  "charset": "UTF-8"
			},
			"de_AT": {
			  "name": "German (Austria)",
			  "charset": "ISO-8859-1"
			},
			"de_BE": {
			  "name": "German (Belgium)",
			  "charset": "ISO-8859-1"
			},
			"de_DE": {
			  "name": "German (Germany)",
			  "charset": "ISO-8859-1"
			},
			"de_LI": {
			  "name": "German (Liechtenstein)",
			  "charset": "ISO-8859-1"
			},
			"de_LU": {
			  "name": "German (Luxembourg)",
			  "charset": "ISO-8859-1"
			},
			"de_CH": {
			  "name": "German (Switzerland)",
			  "charset": "ISO-8859-1"
			},
			"de": {
			  "name": "German",
			  "charset": "ISO-8859-1"
			},
			"el_CY": {
			  "name": "Greek (Cyprus)",
			  "charset": "UTF-8"
			},
			"el_GR": {
			  "name": "Greek (Greece)",
			  "charset": "UTF-8"
			},
			"el": {
			  "name": "Greek",
			  "charset": "UTF-8"
			},
			"gu_IN": {
			  "name": "Gujarati (India)",
			  "charset": "UTF-8"
			},
			"gu": {
			  "name": "Gujarati",
			  "charset": "UTF-8"
			},
			"guz_KE": {
			  "name": "Gusii (Kenya)",
			  "charset": "UTF-8"
			},
			"guz": {
			  "name": "Gusii",
			  "charset": "UTF-8"
			},
			"ha_Latn": {
			  "name": "Hausa (Latin)",
			  "charset": "UTF-8"
			},
			"ha_Latn_GH": {
			  "name": "Hausa (Latin, Ghana)",
			  "charset": "UTF-8"
			},
			"ha_Latn_NE": {
			  "name": "Hausa (Latin, Niger)",
			  "charset": "UTF-8"
			},
			"ha_Latn_NG": {
			  "name": "Hausa (Latin, Nigeria)",
			  "charset": "UTF-8"
			},
			"ha": {
			  "name": "Hausa",
			  "charset": "UTF-8"
			},
			"haw_US": {
			  "name": "Hawaiian (United States)",
			  "charset": "UTF-8"
			},
			"haw": {
			  "name": "Hawaiian",
			  "charset": "UTF-8"
			},
			"he_IL": {
			  "name": "Hebrew (Israel)",
			  "charset": "ISO-8859-8"
			},
			"he": {
			  "name": "Hebrew",
			  "charset": "ISO-8859-8"
			},
			"hi_IN": {
			  "name": "Hindi (India)",
			  "charset": "UTF-8"
			},
			"hi": {
			  "name": "Hindi",
			  "charset": "UTF-8"
			},
			"hu_HU": {
			  "name": "Hungarian (Hungary)",
			  "charset": "ISO-8859-2"
			},
			"hu": {
			  "name": "Hungarian",
			  "charset": "ISO-8859-2"
			},
			"is_IS": {
			  "name": "Icelandic (Iceland)",
			  "charset": "ISO-8859-1"
			},
			"is": {
			  "name": "Icelandic",
			  "charset": "ISO-8859-1"
			},
			"ig_NG": {
			  "name": "Igbo (Nigeria)",
			  "charset": "UTF-8"
			},
			"ig": {
			  "name": "Igbo",
			  "charset": "UTF-8"
			},
			"id_ID": {
			  "name": "Indonesian (Indonesia)",
			  "charset": "ISO-8859-1"
			},
			"id": {
			  "name": "Indonesian",
			  "charset": "ISO-8859-1"
			},
			"ga_IE": {
			  "name": "Irish (Ireland)",
			  "charset": "ISO-8859-1"
			},
			"ga": {
			  "name": "Irish",
			  "charset": "ISO-8859-1"
			},
			"it_IT": {
			  "name": "Italian (Italy)",
			  "charset": "ISO-8859-1"
			},
			"it_CH": {
			  "name": "Italian (Switzerland)",
			  "charset": "ISO-8859-1"
			},
			"it": {
			  "name": "Italian",
			  "charset": "ISO-8859-1"
			},
			"ja_JP": {
			  "name": "Japanese (Japan)",
			  "charset": "UTF-8"
			},
			"ja": {
			  "name": "Japanese",
			  "charset": "UTF-8"
			},
			"kea_CV": {
			  "name": "Kabuverdianu (Cape Verde)",
			  "charset": "UTF-8"
			},
			"kea": {
			  "name": "Kabuverdianu",
			  "charset": "UTF-8"
			},
			"kab_DZ": {
			  "name": "Kabyle (Algeria)",
			  "charset": "UTF-8"
			},
			"kab": {
			  "name": "Kabyle",
			  "charset": "UTF-8"
			},
			"kl_GL": {
			  "name": "Kalaallisut (Greenland)",
			  "charset": "ISO-8859-1"
			},
			"kl": {
			  "name": "Kalaallisut",
			  "charset": "ISO-8859-1"
			},
			"kln_KE": {
			  "name": "Kalenjin (Kenya)",
			  "charset": "UTF-8"
			},
			"kln": {
			  "name": "Kalenjin",
			  "charset": "UTF-8"
			},
			"kam_KE": {
			  "name": "Kamba (Kenya)",
			  "charset": "UTF-8"
			},
			"kam": {
			  "name": "Kamba",
			  "charset": "UTF-8"
			},
			"kn_IN": {
			  "name": "Kannada (India)",
			  "charset": "UTF-8"
			},
			"kn": {
			  "name": "Kannada",
			  "charset": "UTF-8"
			},
			"kk_Cyrl": {
			  "name": "Kazakh (Cyrillic)",
			  "charset": "UTF-8"
			},
			"kk_Cyrl_KZ": {
			  "name": "Kazakh (Cyrillic, Kazakhstan)",
			  "charset": "UTF-8"
			},
			"kk": {
			  "name": "Kazakh",
			  "charset": "UTF-8"
			},
			"km_KH": {
			  "name": "Khmer (Cambodia)",
			  "charset": "UTF-8"
			},
			"km": {
			  "name": "Khmer",
			  "charset": "UTF-8"
			},
			"ki_KE": {
			  "name": "Kikuyu (Kenya)",
			  "charset": "UTF-8"
			},
			"ki": {
			  "name": "Kikuyu",
			  "charset": "UTF-8"
			},
			"rw_RW": {
			  "name": "Kinyarwanda (Rwanda)",
			  "charset": "UTF-8"
			},
			"rw": {
			  "name": "Kinyarwanda",
			  "charset": "UTF-8"
			},
			"kok_IN": {
			  "name": "Konkani (India)",
			  "charset": "UTF-8"
			},
			"kok": {
			  "name": "Konkani",
			  "charset": "UTF-8"
			},
			"ko_KR": {
			  "name": "Korean (South Korea)",
			  "charset": "UTF-8"
			},
			"ko": {
			  "name": "Korean",
			  "charset": "UTF-8"
			},
			"khq_ML": {
			  "name": "Koyra Chiini (Mali)",
			  "charset": "UTF-8"
			},
			"khq": {
			  "name": "Koyra Chiini",
			  "charset": "UTF-8"
			},
			"ses_ML": {
			  "name": "Koyraboro Senni (Mali)",
			  "charset": "UTF-8"
			},
			"ses": {
			  "name": "Koyraboro Senni",
			  "charset": "UTF-8"
			},
			"lag_TZ": {
			  "name": "Langi (Tanzania)",
			  "charset": "UTF-8"
			},
			"lag": {
			  "name": "Langi",
			  "charset": "UTF-8"
			},
			"lv_LV": {
			  "name": "Latvian (Latvia)",
			  "charset": "UTF-8"
			},
			"lv": {
			  "name": "Latvian",
			  "charset": "UTF-8"
			},
			"lt_LT": {
			  "name": "Lithuanian (Lithuania)",
			  "charset": "ISO-8859-13"
			},
			"lt": {
			  "name": "Lithuanian",
			  "charset": "ISO-8859-13"
			},
			"luo_KE": {
			  "name": "Luo (Kenya)",
			  "charset": "UTF-8"
			},
			"luo": {
			  "name": "Luo",
			  "charset": "UTF-8"
			},
			"luy_KE": {
			  "name": "Luyia (Kenya)",
			  "charset": "UTF-8"
			},
			"luy": {
			  "name": "Luyia",
			  "charset": "UTF-8"
			},
			"mk_MK": {
			  "name": "Macedonian (Macedonia)",
			  "charset": "ISO-8859-5"
			},
			"mk": {
			  "name": "Macedonian",
			  "charset": "ISO-8859-5"
			},
			"jmc_TZ": {
			  "name": "Machame (Tanzania)",
			  "charset": "UTF-8"
			},
			"jmc": {
			  "name": "Machame",
			  "charset": "UTF-8"
			},
			"kde_TZ": {
			  "name": "Makonde (Tanzania)",
			  "charset": "UTF-8"
			},
			"kde": {
			  "name": "Makonde",
			  "charset": "UTF-8"
			},
			"mg_MG": {
			  "name": "Malagasy (Madagascar)",
			  "charset": "ISO-8859-15"
			},
			"mg": {
			  "name": "Malagasy",
			  "charset": "ISO-8859-15"
			},
			"ms_BN": {
			  "name": "Malay (Brunei)",
			  "charset": "UTF-8"
			},
			"ms_MY": {
			  "name": "Malay (Malaysia)",
			  "charset": "UTF-8"
			},
			"ms": {
			  "name": "Malay",
			  "charset": "UTF-8"
			},
			"ml_IN": {
			  "name": "Malayalam (India)",
			  "charset": "UTF-8"
			},
			"ml": {
			  "name": "Malayalam",
			  "charset": "UTF-8"
			},
			"mt_MT": {
			  "name": "Maltese (Malta)",
			  "charset": "UTF-8"
			},
			"mt": {
			  "name": "Maltese",
			  "charset": "ISO-8859-3"
			},
			"gv_GB": {
			  "name": "Manx (United Kingdom)",
			  "charset": "ISO-8859-1"
			},
			"gv": {
			  "name": "Manx",
			  "charset": "ISO-8859-1"
			},
			"mr_IN": {
			  "name": "Marathi (India)",
			  "charset": "UTF-8"
			},
			"mr": {
			  "name": "Marathi",
			  "charset": "UTF-8"
			},
			"mas_KE": {
			  "name": "Masai (Kenya)",
			  "charset": "UTF-8"
			},
			"mas_TZ": {
			  "name": "Masai (Tanzania)",
			  "charset": "UTF-8"
			},
			"mas": {
			  "name": "Masai",
			  "charset": "UTF-8"
			},
			"mer_KE": {
			  "name": "Meru (Kenya)",
			  "charset": "UTF-8"
			},
			"mer": {
			  "name": "Meru",
			  "charset": "UTF-8"
			},
			"mfe_MU": {
			  "name": "Morisyen (Mauritius)",
			  "charset": "UTF-8"
			},
			"mfe": {
			  "name": "Morisyen",
			  "charset": "UTF-8"
			},
			"naq_NA": {
			  "name": "Nama (Namibia)",
			  "charset": "UTF-8"
			},
			"naq": {
			  "name": "Nama",
			  "charset": "UTF-8"
			},
			"ne_IN": {
			  "name": "Nepali (India)",
			  "charset": "UTF-8"
			},
			"ne_NP": {
			  "name": "Nepali (Nepal)",
			  "charset": "UTF-8"
			},
			"ne": {
			  "name": "Nepali",
			  "charset": "UTF-8"
			},
			"nd_ZW": {
			  "name": "North Ndebele (Zimbabwe)",
			  "charset": "UTF-8"
			},
			"nd": {
			  "name": "North Ndebele",
			  "charset": "UTF-8"
			},
			"nb_NO": {
			  "name": "Norwegian Bokmål (Norway)",
			  "charset": "ISO-8859-1"
			},
			"nb": {
			  "name": "Norwegian Bokmål",
			  "charset": "ISO-8859-1"
			},
			"nn_NO": {
			  "name": "Norwegian Nynorsk (Norway)",
			  "charset": "ISO-8859-1"
			},
			"nn": {
			  "name": "Norwegian Nynorsk",
			  "charset": "ISO-8859-1"
			},
			"nyn_UG": {
			  "name": "Nyankole (Uganda)",
			  "charset": "UTF-8"
			},
			"nyn": {
			  "name": "Nyankole",
			  "charset": "UTF-8"
			},
			"or_IN": {
			  "name": "Oriya (India)",
			  "charset": "UTF-8"
			},
			"or": {
			  "name": "Oriya",
			  "charset": "UTF-8"
			},
			"om_ET": {
			  "name": "Oromo (Ethiopia)",
			  "charset": "UTF-8"
			},
			"om_KE": {
			  "name": "Oromo (Kenya)",
			  "charset": "UTF-8"
			},
			"om": {
			  "name": "Oromo",
			  "charset": "UTF-8"
			},
			"ps_AF": {
			  "name": "Pashto (Afghanistan)",
			  "charset": "UTF-8"
			},
			"ps": {
			  "name": "Pashto",
			  "charset": "UTF-8"
			},
			"fa_AF": {
			  "name": "Persian (Afghanistan)",
			  "charset": "UTF-8"
			},
			"fa_IR": {
			  "name": "Persian (Iran)",
			  "charset": "UTF-8"
			},
			"fa": {
			  "name": "Persian",
			  "charset": "UTF-8"
			},
			"pl_PL": {
			  "name": "Polish (Poland)",
			  "charset": "ISO-8859-2"
			},
			"pl": {
			  "name": "Polish",
			  "charset": "ISO-8859-2"
			},
			"pt_BR": {
			  "name": "Portuguese (Brazil)",
			  "charset": "ISO-8859-1"
			},
			"pt_GW": {
			  "name": "Portuguese (Guinea-Bissau)",
			  "charset": "ISO-8859-1"
			},
			"pt_MZ": {
			  "name": "Portuguese (Mozambique)",
			  "charset": "ISO-8859-1"
			},
			"pt_PT": {
			  "name": "Portuguese (Portugal)",
			  "charset": "ISO-8859-1"
			},
			"pt": {
			  "name": "Portuguese",
			  "charset": "ISO-8859-1"
			},
			"pa_Arab": {
			  "name": "Punjabi (Arabic)",
			  "charset": "UTF-8"
			},
			"pa_Arab_PK": {
			  "name": "Punjabi (Arabic, Pakistan)",
			  "charset": "UTF-8"
			},
			"pa_Guru": {
			  "name": "Punjabi (Gurmukhi)",
			  "charset": "UTF-8"
			},
			"pa_Guru_IN": {
			  "name": "Punjabi (Gurmukhi, India)",
			  "charset": "UTF-8"
			},
			"pa": {
			  "name": "Punjabi",
			  "charset": "UTF-8"
			},
			"ro_MD": {
			  "name": "Romanian (Moldova)",
			  "charset": "UTF-8"
			},
			"ro_RO": {
			  "name": "Romanian (Romania)",
			  "charset": "UTF-8"
			},
			"ro": {
			  "name": "Romanian",
			  "charset": "UTF-8"
			},
			"rm_CH": {
			  "name": "Romansh (Switzerland)",
			  "charset": "UTF-8"
			},
			"rm": {
			  "name": "Romansh",
			  "charset": "UTF-8"
			},
			"rof_TZ": {
			  "name": "Rombo (Tanzania)",
			  "charset": "UTF-8"
			},
			"rof": {
			  "name": "Rombo",
			  "charset": "UTF-8"
			},
			"ru_MD": {
			  "name": "Russian (Moldova)",
			  "charset": "UTF-8"
			},
			"ru_RU": {
			  "name": "Russian (Russia)",
			  "charset": "UTF-8"
			},
			"ru_UA": {
			  "name": "Russian (Ukraine)",
			  "charset": "UTF-8"
			},
			"ru": {
			  "name": "Russian",
			  "charset": "UTF-8"
			},
			"rwk_TZ": {
			  "name": "Rwa (Tanzania)",
			  "charset": "UTF-8"
			},
			"rwk": {
			  "name": "Rwa",
			  "charset": "UTF-8"
			},
			"saq_KE": {
			  "name": "Samburu (Kenya)",
			  "charset": "UTF-8"
			},
			"saq": {
			  "name": "Samburu",
			  "charset": "UTF-8"
			},
			"sg_CF": {
			  "name": "Sango (Central African Republic)",
			  "charset": "UTF-8"
			},
			"sg": {
			  "name": "Sango",
			  "charset": "UTF-8"
			},
			"seh_MZ": {
			  "name": "Sena (Mozambique)",
			  "charset": "UTF-8"
			},
			"seh": {
			  "name": "Sena",
			  "charset": "UTF-8"
			},
			"sr_Cyrl": {
			  "name": "Serbian (Cyrillic)",
			  "charset": "UTF-8"
			},
			"sr_Cyrl_BA": {
			  "name": "Serbian (Cyrillic, Bosnia and Herzegovina)",
			  "charset": "UTF-8"
			},
			"sr_Cyrl_ME": {
			  "name": "Serbian (Cyrillic, Montenegro)",
			  "charset": "UTF-8"
			},
			"sr_Cyrl_RS": {
			  "name": "Serbian (Cyrillic, Serbia)",
			  "charset": "UTF-8"
			},
			"sr_Latn": {
			  "name": "Serbian (Latin)",
			  "charset": "UTF-8"
			},
			"sr_Latn_BA": {
			  "name": "Serbian (Latin, Bosnia and Herzegovina)",
			  "charset": "UTF-8"
			},
			"sr_Latn_ME": {
			  "name": "Serbian (Latin, Montenegro)",
			  "charset": "UTF-8"
			},
			"sr_Latn_RS": {
			  "name": "Serbian (Latin, Serbia)",
			  "charset": "UTF-8"
			},
			"sr": {
			  "name": "Serbian",
			  "charset": "UTF-8"
			},
			"sn_ZW": {
			  "name": "Shona (Zimbabwe)",
			  "charset": "UTF-8"
			},
			"sn": {
			  "name": "Shona",
			  "charset": "UTF-8"
			},
			"ii_CN": {
			  "name": "Sichuan Yi (China)",
			  "charset": "UTF-8"
			},
			"ii": {
			  "name": "Sichuan Yi",
			  "charset": "UTF-8"
			},
			"si_LK": {
			  "name": "Sinhala (Sri Lanka)",
			  "charset": "UTF-8"
			},
			"si": {
			  "name": "Sinhala",
			  "charset": "UTF-8"
			},
			"sk_SK": {
			  "name": "Slovak (Slovakia)",
			  "charset": "ISO-8859-2"
			},
			"sk": {
			  "name": "Slovak",
			  "charset": "ISO-8859-2"
			},
			"sl_SI": {
			  "name": "Slovenian (Slovenia)",
			  "charset": "ISO-8859-2"
			},
			"sl": {
			  "name": "Slovenian",
			  "charset": "ISO-8859-2"
			},
			"xog_UG": {
			  "name": "Soga (Uganda)",
			  "charset": "UTF-8"
			},
			"xog": {
			  "name": "Soga",
			  "charset": "UTF-8"
			},
			"so_DJ": {
			  "name": "Somali (Djibouti)",
			  "charset": "UTF-8"
			},
			"so_ET": {
			  "name": "Somali (Ethiopia)",
			  "charset": "UTF-8"
			},
			"so_KE": {
			  "name": "Somali (Kenya)",
			  "charset": "UTF-8"
			},
			"so_SO": {
			  "name": "Somali (Somalia)",
			  "charset": "UTF-8"
			},
			"so": {
			  "name": "Somali",
			  "charset": "UTF-8"
			},
			"es_AR": {
			  "name": "Spanish (Argentina)",
			  "charset": "UTF-8"
			},
			"es_BO": {
			  "name": "Spanish (Bolivia)",
			  "charset": "UTF-8"
			},
			"es_CL": {
			  "name": "Spanish (Chile)",
			  "charset": "UTF-8"
			},
			"es_CO": {
			  "name": "Spanish (Colombia)",
			  "charset": "UTF-8"
			},
			"es_CR": {
			  "name": "Spanish (Costa Rica)",
			  "charset": "UTF-8"
			},
			"es_DO": {
			  "name": "Spanish (Dominican Republic)",
			  "charset": "UTF-8"
			},
			"es_EC": {
			  "name": "Spanish (Ecuador)",
			  "charset": "UTF-8"
			},
			"es_SV": {
			  "name": "Spanish (El Salvador)",
			  "charset": "UTF-8"
			},
			"es_GQ": {
			  "name": "Spanish (Equatorial Guinea)",
			  "charset": "UTF-8"
			},
			"es_GT": {
			  "name": "Spanish (Guatemala)",
			  "charset": "UTF-8"
			},
			"es_HN": {
			  "name": "Spanish (Honduras)",
			  "charset": "UTF-8"
			},
			"es_419": {
			  "name": "Spanish (Latin America)",
			  "charset": "UTF-8"
			},
			"es_MX": {
			  "name": "Spanish (Mexico)",
			  "charset": "UTF-8"
			},
			"es_NI": {
			  "name": "Spanish (Nicaragua)",
			  "charset": "UTF-8"
			},
			"es_PA": {
			  "name": "Spanish (Panama)",
			  "charset": "UTF-8"
			},
			"es_PY": {
			  "name": "Spanish (Paraguay)",
			  "charset": "UTF-8"
			},
			"es_PE": {
			  "name": "Spanish (Peru)",
			  "charset": "UTF-8"
			},
			"es_PR": {
			  "name": "Spanish (Puerto Rico)",
			  "charset": "UTF-8"
			},
			"es_ES": {
			  "name": "Spanish (Spain)",
			  "charset": "UTF-8"
			},
			"es_US": {
			  "name": "Spanish (United States)",
			  "charset": "UTF-8"
			},
			"es_UY": {
			  "name": "Spanish (Uruguay)",
			  "charset": "UTF-8"
			},
			"es_VE": {
			  "name": "Spanish (Venezuela)",
			  "charset": "UTF-8"
			},
			"es": {
			  "name": "Spanish",
			  "charset": "UTF-8"
			},
			"sw_KE": {
			  "name": "Swahili (Kenya)",
			  "charset": "UTF-8"
			},
			"sw_TZ": {
			  "name": "Swahili (Tanzania)",
			  "charset": "UTF-8"
			},
			"sw": {
			  "name": "Swahili",
			  "charset": "UTF-8"
			},
			"sv_FI": {
			  "name": "Swedish (Finland)",
			  "charset": "UTF-8"
			},
			"sv_SE": {
			  "name": "Swedish (Sweden)",
			  "charset": "UTF-8"
			},
			"sv": {
			  "name": "Swedish",
			  "charset": "UTF-8"
			},
			"gsw_CH": {
			  "name": "Swiss German (Switzerland)",
			  "charset": "UTF-8"
			},
			"gsw": {
			  "name": "Swiss German",
			  "charset": "UTF-8"
			},
			"shi_Latn": {
			  "name": "Tachelhit (Latin)",
			  "charset": "UTF-8"
			},
			"shi_Latn_MA": {
			  "name": "Tachelhit (Latin, Morocco)",
			  "charset": "UTF-8"
			},
			"shi_Tfng": {
			  "name": "Tachelhit (Tifinagh)",
			  "charset": "UTF-8"
			},
			"shi_Tfng_MA": {
			  "name": "Tachelhit (Tifinagh, Morocco)",
			  "charset": "UTF-8"
			},
			"shi": {
			  "name": "Tachelhit",
			  "charset": "UTF-8"
			},
			"dav_KE": {
			  "name": "Taita (Kenya)",
			  "charset": "UTF-8"
			},
			"dav": {
			  "name": "Taita",
			  "charset": "UTF-8"
			},
			"ta_IN": {
			  "name": "Tamil (India)",
			  "charset": "UTF-8"
			},
			"ta_LK": {
			  "name": "Tamil (Sri Lanka)",
			  "charset": "UTF-8"
			},
			"ta": {
			  "name": "Tamil",
			  "charset": "UTF-8"
			},
			"te_IN": {
			  "name": "Telugu (India)",
			  "charset": "UTF-8"
			},
			"te": {
			  "name": "Telugu",
			  "charset": "UTF-8"
			},
			"teo_KE": {
			  "name": "Teso (Kenya)",
			  "charset": "UTF-8"
			},
			"teo_UG": {
			  "name": "Teso (Uganda)",
			  "charset": "UTF-8"
			},
			"teo": {
			  "name": "Teso",
			  "charset": "UTF-8"
			},
			"th_TH": {
			  "name": "Thai (Thailand)",
			  "charset": "TIS-620"
			},
			"th": {
			  "name": "Thai",
			  "charset": "TIS-620"
			},
			"bo_CN": {
			  "name": "Tibetan (China)",
			  "charset": "UTF-8"
			},
			"bo_IN": {
			  "name": "Tibetan (India)",
			  "charset": "UTF-8"
			},
			"bo": {
			  "name": "Tibetan",
			  "charset": "UTF-8"
			},
			"ti_ER": {
			  "name": "Tigrinya (Eritrea)",
			  "charset": "UTF-8"
			},
			"ti_ET": {
			  "name": "Tigrinya (Ethiopia)",
			  "charset": "UTF-8"
			},
			"ti": {
			  "name": "Tigrinya",
			  "charset": "UTF-8"
			},
			"to_TO": {
			  "name": "Tonga (Tonga)",
			  "charset": "UTF-8"
			},
			"to": {
			  "name": "Tonga",
			  "charset": "UTF-8"
			},
			"tr_TR": {
			  "name": "Turkish (Turkey)",
			  "charset": "ISO-8859-9"
			},
			"tr": {
			  "name": "Turkish",
			  "charset": "ISO-8859-9"
			},
			"uk_UA": {
			  "name": "Ukrainian (Ukraine)",
			  "charset": "KOI8-U"
			},
			"uk": {
			  "name": "Ukrainian",
			  "charset": "KOI8-U"
			},
			"ur_IN": {
			  "name": "Urdu (India)",
			  "charset": "UTF-8"
			},
			"ur_PK": {
			  "name": "Urdu (Pakistan)",
			  "charset": "UTF-8"
			},
			"ur": {
			  "name": "Urdu",
			  "charset": "UTF-8"
			},
			"uz_Arab": {
			  "name": "Uzbek (Arabic)",
			  "charset": "UTF-8"
			},
			"uz_Arab_AF": {
			  "name": "Uzbek (Arabic, Afghanistan)",
			  "charset": "UTF-8"
			},
			"uz_Cyrl": {
			  "name": "Uzbek (Cyrillic)",
			  "charset": "UTF-8"
			},
			"uz_Cyrl_UZ": {
			  "name": "Uzbek (Cyrillic, Uzbekistan)",
			  "charset": "UTF-8"
			},
			"uz_Latn": {
			  "name": "Uzbek (Latin)",
			  "charset": "UTF-8"
			},
			"uz_Latn_UZ": {
			  "name": "Uzbek (Latin, Uzbekistan)",
			  "charset": "UTF-8"
			},
			"uz": {
			  "name": "Uzbek",
			  "charset": "UTF-8"
			},
			"vi_VN": {
			  "name": "Vietnamese (Vietnam)",
			  "charset": "UTF-8"
			},
			"vi": {
			  "name": "Vietnamese",
			  "charset": "UTF-8"
			},
			"vun_TZ": {
			  "name": "Vunjo (Tanzania)",
			  "charset": "UTF-8"
			},
			"vun": {
			  "name": "Vunjo",
			  "charset": "UTF-8"
			},
			"cy_GB": {
			  "name": "Welsh (United Kingdom)",
			  "charset": "UTF-8"
			},
			"cy": {
			  "name": "Welsh",
			  "charset": "UTF-8"
			},
			"yo_NG": {
			  "name": "Yoruba (Nigeria)",
			  "charset": "UTF-8"
			},
			"yo": {
			  "name": "Yoruba",
			  "charset": "UTF-8"
			},
			"zu_ZA": {
			  "name": "Zulu (South Africa)",
			  "charset": "ISO-8859-1"
			},
			"zu": {
			  "name": "Zulu",
			  "charset": "ISO-8859-1"
			}
		  }
	],
} )( ( { value, options, setState } ) => ( 
	<MultiSelectControl 
		value={ value } 
		options={ options } 
		onChange={ value => setState( { value } ) }
	/>
) );


export default function Edit( { clientId, attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();

	const otherLocaleOptions = function() {
		if ( attributes.other_locales_show == true ) {
			return (
				<div class="locale-picker">
					<ToggleControl
						label="ph en"
						checked={ attributes.block_locale_ph_en }
						onChange={() => setAttributes({ block_locale_ph_en: !attributes.block_locale_ph_en })}
					/>
					<ToggleControl
						label="mx en"
						checked={ attributes.block_locale_mx_en }
						onChange={() => setAttributes({ block_locale_mx_en: !attributes.block_locale_mx_en })}
					/>
					<ToggleControl
						label="mx es"
						checked={ attributes.block_locale_mx_es }
						onChange={() => setAttributes({ block_locale_mx_es: !attributes.block_locale_mx_es })}
					/>
					<ToggleControl
						label="es en"
						checked={ attributes.block_locale_es_en }
						onChange={() => setAttributes({ block_locale_es_en: !attributes.block_locale_es_en })}
					/>
					<ToggleControl
						label="es es"
						checked={ attributes.block_locale_es_es }
						onChange={() => setAttributes({ block_locale_es_es: !attributes.block_locale_es_es })}
					/>
					<ToggleControl
						label="sg en"
						checked={ attributes.block_locale_sg_en }
						onChange={() => setAttributes({ block_locale_sg_en: !attributes.block_locale_sg_en })}
					/>
					<ToggleControl
						label="it en"
						checked={ attributes.block_locale_it_en }
						onChange={() => setAttributes({ block_locale_it_en: !attributes.block_locale_it_en })}
					/>
					<ToggleControl
						label="ch en"
						checked={ attributes.block_locale_ch_en }
						onChange={() => setAttributes({ block_locale_ch_en: !attributes.block_locale_ch_en })}
					/>
					<ToggleControl
						label="ch fr"
						checked={ attributes.block_locale_ch_fr }
						onChange={() => setAttributes({ block_locale_ch_fr: !attributes.block_locale_ch_fr })}
					/>
					<ToggleControl
						label="ch de"
						checked={ attributes.block_locale_ch_de }
						onChange={() => setAttributes({ block_locale_ch_de: !attributes.block_locale_ch_de })}
					/>
					<ToggleControl
						label="nl en"
						checked={ attributes.block_locale_nl_en }
						onChange={() => setAttributes({ block_locale_nl_en: !attributes.block_locale_nl_en })}
					/>
					<ToggleControl
						label="nl nl"
						checked={ attributes.block_locale_nl_nl }
						onChange={() => setAttributes({ block_locale_nl_nl: !attributes.block_locale_nl_nl })}
					/>
					<ToggleControl
						label="se en"
						checked={ attributes.block_locale_se_en }
						onChange={() => setAttributes({ block_locale_se_en: !attributes.block_locale_se_en })}
					/>
					<ToggleControl
						label="be en"
						checked={ attributes.block_locale_be_en }
						onChange={() => setAttributes({ block_locale_be_en: !attributes.block_locale_be_en })}
					/>
					<ToggleControl
						label="be fr"
						checked={ attributes.block_locale_be_fr }
						onChange={() => setAttributes({ block_locale_be_fr: !attributes.block_locale_be_fr })}
					/>
					<ToggleControl
						label="id en"
						checked={ attributes.block_locale_id_en }
						onChange={() => setAttributes({ block_locale_id_en: !attributes.block_locale_id_en })}
					/>
					<ToggleControl
						label="cl es"
						checked={ attributes.block_locale_cl_es }
						onChange={() => setAttributes({ block_locale_cl_es: !attributes.block_locale_cl_es })}
					/>
					<ToggleControl
						label="cl en"
						checked={ attributes.block_locale_cl_en }
						onChange={() => setAttributes({ block_locale_cl_en: !attributes.block_locale_cl_en })}
					/>
					<ToggleControl
						label="za en"
						checked={ attributes.block_locale_za_en }
						onChange={() => setAttributes({ block_locale_za_en: !attributes.block_locale_za_en })}
					/>
					<ToggleControl
						label="ie en"
						checked={ attributes.block_locale_ie_en }
						onChange={() => setAttributes({ block_locale_ie_en: !attributes.block_locale_ie_en })}
					/>
					<ToggleControl
						label="no es"
						checked={ attributes.block_locale_no_es }
						onChange={() => setAttributes({ block_locale_no_es: !attributes.block_locale_no_es })}
					/>
					<ToggleControl
						label="hk en"
						checked={ attributes.block_locale_hk_en }
						onChange={() => setAttributes({ block_locale_hk_en: !attributes.block_locale_hk_en })}
					/>
					<ToggleControl
						label="fi en"
						checked={ attributes.block_locale_fi_en }
						onChange={() => setAttributes({ block_locale_fi_en: !attributes.block_locale_fi_en })}
					/>
					<ToggleControl
						label="at en"
						checked={ attributes.block_locale_at_en }
						onChange={() => setAttributes({ block_locale_at_en: !attributes.block_locale_at_en })}
					/>
					<ToggleControl
						label="jp en"
						checked={ attributes.block_locale_jp_en }
						onChange={() => setAttributes({ block_locale_jp_en: !attributes.block_locale_jp_en })}
					/>
					<ToggleControl
						label="gr en"
						checked={ attributes.block_locale_gr_en }
						onChange={() => setAttributes({ block_locale_gr_en: !attributes.block_locale_gr_en })}
					/>
					<ToggleControl
						label="pt en"
						checked={ attributes.block_locale_pt_en }
						onChange={() => setAttributes({ block_locale_pt_en: !attributes.block_locale_pt_en })}
					/>
					<ToggleControl
						label="dk en"
						checked={ attributes.block_locale_dk_en }
						onChange={() => setAttributes({ block_locale_dk_en: !attributes.block_locale_dk_en })}
					/>
					<ToggleControl
						label="cz en"
						checked={ attributes.block_locale_cz_en }
						onChange={() => setAttributes({ block_locale_cz_en: !attributes.block_locale_cz_en })}
					/>
					<ToggleControl
						label="il en"
						checked={ attributes.block_locale_il_en }
						onChange={() => setAttributes({ block_locale_il_en: !attributes.block_locale_il_en })}
					/>
					<ToggleControl
						label="fr fr"
						checked={ attributes.block_locale_fr_fr }
						onChange={() => setAttributes({ block_locale_fr_fr: !attributes.block_locale_fr_fr })}
					/>
					<ToggleControl
						label="at de"
						checked={ attributes.block_locale_at_de }
						onChange={() => setAttributes({ block_locale_at_de: !attributes.block_locale_at_de })}
					/>
					<ToggleControl
						label="be de"
						checked={ attributes.block_locale_be_de }
						onChange={() => setAttributes({ block_locale_be_de: !attributes.block_locale_be_de })}
					/>
					<ToggleControl
						label="be nl"
						checked={ attributes.block_locale_be_nl }
						onChange={() => setAttributes({ block_locale_be_nl: !attributes.block_locale_be_nl })}
					/>
				</div>
			)
		}
	}

	const northAmericaCountryOnly = function() {
		// if ( attributes.other_locales_show == true ) {
			return (
				<div class="locale-picker">
					<ToggleControl
						className='toggle-control-ai'
						label="ai"
						checked={ attributes.block_locale_ph_en }
						onChange={() => setAttributes({ block_locale_ph_en: !attributes.block_locale_ph_en })}
					/>
				</div>
			)
		// }
	}

	const activeLocales = function() {
		let localeList = [];
		let localesState = '';
		if ( attributes.is_default_block ) {
			localesState = 'Locales excluded:';
		} else {
			localesState = 'Locales included:';
		}
		if ( attributes.block_locale_us_en ) {
			localeList.push(" us/en, ");
		}
		if ( attributes.block_locale_ca_en ) {
			localeList.push(" ca/en, ");
		}
		if ( attributes.block_locale_ca_fr ) {
			localeList.push(" ca/fr, ");
		}
		if ( attributes.block_locale_au_en ) {
			localeList.push(" au/en, ");
		}
		if ( attributes.block_locale_gb_en ) {
			localeList.push(" gb/en, ");
		}
		if ( attributes.block_locale_nz_en ) {
			localeList.push(" nz/en, ");
		}
		if ( attributes.block_locale_de_de ) {
			localeList.push(" de/de, ");
		}
		if ( attributes.block_locale_fr_fr ) {
			localeList.push(" fr/fr, ");
		}
		if ( attributes.block_locale_fr_en ) {
			localeList.push(" fr/en, ");
		}
		if ( attributes.block_locale_ph_en ) {
			localeList.push(" ph/en, ");
		}
		if ( attributes.block_locale_mx_en ) {
			localeList.push(" mx/en, ");
		}
		if ( attributes.block_locale_mx_es ) {
			localeList.push(" mx/es, ");
		}
		if ( attributes.block_locale_es_en ) {
			localeList.push(" es/en, ");
		}
		if ( attributes.block_locale_es_es ) {
			localeList.push(" es/es, ");
		}
		if ( attributes.block_locale_sg_en ) {
			localeList.push(" sg/en, ");
		}
		if ( attributes.block_locale_it_en ) {
			localeList.push(" it/en, ");
		}
		if ( attributes.block_locale_ch_en ) {
			localeList.push(" ch/en, ");
		}
		if ( attributes.block_locale_ch_fr ) {
			localeList.push(" ch/fr, ");
		}
		if ( attributes.block_locale_ch_de ) {
			localeList.push(" ch/de, ");
		}
		if ( attributes.block_locale_nl_en ) {
			localeList.push(" nl/en, ");
		}
		if ( attributes.block_locale_nl_nl ) {
			localeList.push(" nl/nl, ");
		}
		if ( attributes.block_locale_se_en ) {
			localeList.push(" se/en, ");
		}
		if ( attributes.block_locale_be_en ) {
			localeList.push(" be/en, ");
		}
		if ( attributes.block_locale_be_fr ) {
			localeList.push(" be/fr, ");
		}
		if ( attributes.block_locale_id_en ) {
			localeList.push(" id/en, ");
		}
		if ( attributes.block_locale_cl_es ) {
			localeList.push(" cl/es, ");
		}
		if ( attributes.block_locale_cl_en ) {
			localeList.push(" cl/en, ");
		}
		if ( attributes.block_locale_za_en ) {
			localeList.push(" za/en, ");
		}
		if ( attributes.block_locale_ie_en ) {
			localeList.push(" ie/en, ");
		}
		if ( attributes.block_locale_no_es ) {
			localeList.push(" no/es, ");
		}
		if ( attributes.block_locale_hk_en ) {
			localeList.push(" hk/en, ");
		}
		if ( attributes.block_locale_fi_en ) {
			localeList.push(" fi/en, ");
		}
		if ( attributes.block_locale_at_en ) {
			localeList.push(" at/en, ");
		}
		if ( attributes.block_locale_jp_en ) {
			localeList.push(" jp/en, ");
		}
		if ( attributes.block_locale_gr_en ) {
			localeList.push(" gr/en, ");
		}
		if ( attributes.block_locale_pt_en ) {
			localeList.push(" pt/en, ");
		}
		if ( attributes.block_locale_dk_en ) {
			localeList.push(" dk/en, ");
		}
		if ( attributes.block_locale_cz_en ) {
			localeList.push(" cz/en, ");
		}
		if ( attributes.block_locale_il_en ) {
			localeList.push(" il/en, ");
		}
		if ( attributes.block_locale_at_de ) {
			localeList.push(" at/de, ");
		}
		if ( attributes.block_locale_be_de ) {
			localeList.push(" be/de, ");
		}
		if ( attributes.block_locale_be_nl ) {
			localeList.push(" be/nl, ");
		}
		return <p className='locales-state'> {localesState} <strong>{localeList}</strong> </p>;
	}

	const blockState = function() {
		let uiState = '';
		if ( attributes.ui_state ) {
			uiState = 'ui-minify';
		} else {
			uiState = '';
		}
		return uiState;
	}

	// Block contents constructor.
	let blockContents = [];

	setTimeout(function(){

		let blockId = 'block-' + clientId;

		var blockList = document.getElementById( blockId ).querySelectorAll( ".block-editor-block-list__layout > div" );

		Array.from( blockList ).forEach( ( element, index ) => {
			var blockDataTitle = element.getAttribute( 'data-title' );
			blockContents.push( blockDataTitle );
			document.querySelector( '.list-' + clientId ).innerHTML = blockContents.toString().replaceAll(",", ", ");
		});

	}, 2000);

	return (
		<div { ...blockProps }>
			<div className='gbl-header-row'>
				<h3 className='h3-style'>Localization Wrapper
				{/* <ToggleControl
					label="Minify / Expand block"
					checked={ attributes.ui_state }
					onChange={() => setAttributes({ ui_state: !attributes.ui_state })}
				/> */}
				</h3>
				{/* <div>
					{ activeLocales() }
					<div className={ 'inner-list list-' + clientId }></div>
				</div>
				<ToggleControl
					label="Is this a 'default' block?"
					checked={ attributes.is_default_block }
					onChange={() => setAttributes({ is_default_block: !attributes.is_default_block })}
				/> */}
			</div>
			<div className='gbl-url-pattern-selector'>
				<h4>Select your website’s URL localization pattern</h4>

				<SelectControl
						label="URL Pattern"
						value={ attributes.block_color }
						options={ [
							{ label: 'Language & Country (joined): EG www.your-website.com/en_US/', value: 'block-background-red-medium' },
							{ label: 'Language only: EG www.your-website.com/en/', value: 'block-background-blue-medium' },
							{ label: 'Country only: EG www.your-website.com/us/', value: 'block-background-blue-medium' },
							{ label: 'Country THEN language: EG www.your-website.com/us/en', value: 'block-background-blue-medium' },
						] }
						// onChange={( value ) => setAttributes({ block_color: value })}
					/>
			</div>
			<div className='gbl-type-selector'>
				<h4>Is this a ‘universal’ block?</h4>
				<span>If ‘yes’, wrapped blocks will display on every locale EXCLUDING the locales you choose.</span>
				<span>If ‘no’, wrapped blocks wlll ONLY display on the locales you choose.</span>
				<ToggleControl
					label="'Universal' block?"
					// checked={ attributes.progress_circle_show }
					// onChange={() => setAttributes({ progress_circle_show: !attributes.progress_circle_show })}
				/>
			</div>
			<div className='gbl-locale-selector'>
				<h4>Locale selector</h4>
				<span>Select the locales that you wish to include / exclude ( depending on your above selection ) wrapped block on.</span>
				<div className={ "col " + blockState() }>
					{/* <h4 className='h5-style'>Popular locales</h4> */}
					{/* <div class="locale-picker border-bottom" style="display: none;">
						<ToggleControl
							label="/us/en/"
							checked={ attributes.block_locale_us_en }
							onChange={() => setAttributes({ block_locale_us_en: !attributes.block_locale_us_en })}
						/>
						<ToggleControl
							label="ca en"
							checked={ attributes.block_locale_ca_en }
							onChange={() => setAttributes({ block_locale_ca_en: !attributes.block_locale_ca_en })}
						/>
						<ToggleControl
							label="ca fr"
							checked={ attributes.block_locale_ca_fr }
							onChange={() => setAttributes({ block_locale_ca_fr: !attributes.block_locale_ca_fr })}
						/>
						<ToggleControl
							label="gb en"
							checked={ attributes.block_locale_gb_en }
							onChange={() => setAttributes({ block_locale_gb_en: !attributes.block_locale_gb_en })}
						/>
						<ToggleControl
							label="au en"
							checked={ attributes.block_locale_au_en }
							onChange={() => setAttributes({ block_locale_au_en: !attributes.block_locale_au_en })}
						/>
						<ToggleControl
							label="nz en"
							checked={ attributes.block_locale_nz_en }
							onChange={() => setAttributes({ block_locale_nz_en: !attributes.block_locale_nz_en })}
						/>
						<ToggleControl
							label="de de"
							checked={ attributes.block_locale_de_de }
							onChange={() => setAttributes({ block_locale_de_de: !attributes.block_locale_de_de })}
						/>
						<ToggleControl
							label="fr fr"
							checked={ attributes.block_locale_fr_fr }
							onChange={() => setAttributes({ block_locale_fr_fr: !attributes.block_locale_fr_fr })}
						/>
						<ToggleControl
							label="fr en"
							checked={ attributes.block_locale_fr_en }
							onChange={() => setAttributes({ block_locale_fr_en: !attributes.block_locale_fr_en })}
						/>
					</div> */}
					{/* <div class="locale-picker border-bottom">
						<ToggleControl
							
							label="/us/"
							checked={ attributes.block_locale_us_en }
							onChange={() => setAttributes({ block_locale_us_en: !attributes.block_locale_us_en })}
						/>
						<ToggleControl
							className='toggle-control-ca'
							label="/ca/"
							checked={ attributes.block_locale_ca_en }
							onChange={() => setAttributes({ block_locale_ca_en: !attributes.block_locale_ca_en })}
						/>
						<ToggleControl
							className='toggle-control-gb'
							label="/gb/"
							checked={ attributes.block_locale_ca_fr }
							onChange={() => setAttributes({ block_locale_ca_fr: !attributes.block_locale_ca_fr })}
						/>
						<ToggleControl
							className='toggle-control-uk'
							label="/uk/"
							checked={ attributes.block_locale_gb_en }
							onChange={() => setAttributes({ block_locale_gb_en: !attributes.block_locale_gb_en })}
						/>
						<ToggleControl
							className='toggle-control-fr'
							label="/fr/"
							checked={ attributes.block_locale_au_en }
							onChange={() => setAttributes({ block_locale_au_en: !attributes.block_locale_au_en })}
						/>
						<ToggleControl
							className='toggle-control-es'
							label="/es/"
							checked={ attributes.block_locale_nz_en }
							onChange={() => setAttributes({ block_locale_nz_en: !attributes.block_locale_nz_en })}
						/>
						<ToggleControl
							className='toggle-control-de'
							label="/de/"
							checked={ attributes.block_locale_de_de }
							onChange={() => setAttributes({ block_locale_de_de: !attributes.block_locale_de_de })}
						/>
						<ToggleControl
							className='toggle-control-it'
							label="/it/"
							checked={ attributes.block_locale_fr_fr }
							onChange={() => setAttributes({ block_locale_fr_fr: !attributes.block_locale_fr_fr })}
						/>
						<ToggleControl
							className='toggle-control-nz'
							label="/nz/"
							checked={ attributes.block_locale_fr_en }
							onChange={() => setAttributes({ block_locale_fr_en: !attributes.block_locale_fr_en })}
						/>
						<ToggleControl
							className='toggle-control-au'
							label="/au/"
							checked={ attributes.block_locale_fr_en }
							onChange={() => setAttributes({ block_locale_fr_en: !attributes.block_locale_fr_en })}
						/>
					</div> */}
					{/* <h4 className='h5-style'>Other locales</h4>
					<ToggleControl
						label="Show other locale options"
						checked={ attributes.other_locales_show }
						onChange={() => setAttributes({ other_locales_show: !attributes.other_locales_show })}
					/> */}
					{/* { otherLocaleOptions() } */}
					{/* <h4 className='h5-style'>North America</h4>
					{ northAmericaCountryOnly() }  */}
					<MyMultiSelectControl />
				</div>
			</div>
			<div className='gbl-block-selector'>
				<h4>Block selector</h4>
				<span>Choose the blocks that you wish to be localized, here.</span>
				<div className={ "col " + blockState() }>
					<InnerBlocks
						// templateLock="all"
					/>
				</div>
			</div>
		</div>
	);
}
