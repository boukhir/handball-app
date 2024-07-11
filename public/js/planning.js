// Create an instance of the ej.base.L10n class
var L10n = ej.base.L10n;

// The 'day', 'week', 'month', and 'today' strings are overridden with French translations for the 'fr-CH' language
L10n.load({
    'fr-CH': {
        'schedule': {
            'day': 'Journée',
            'week': 'Semaine',
            'month': 'Mois',
            'today': "Aujourd'hui"
        }
    }
});

// The data of the "cldr-data/main/fr-CH/ca-gregorian.json" file
const gregorianFormat = {
    "main": {
        "fr-CH": {
            "identity": {
                "version": {
                    "_cldrVersion": "36"
                },
                "language": "fr",
                "territory": "CH"
            },
            "dates": {
                "calendars": {
                    "gregorian": {
                        "months": {
                            "format": {
                                "abbreviated": {
                                    "1": "janv.",
                                    "2": "févr.",
                                    "3": "mars",
                                    "4": "avr.",
                                    "5": "mai",
                                    "6": "juin",
                                    "7": "juil.",
                                    "8": "août",
                                    "9": "sept.",
                                    "10": "oct.",
                                    "11": "nov.",
                                    "12": "déc."
                                },
                                "narrow": {
                                    "1": "J",
                                    "2": "F",
                                    "3": "M",
                                    "4": "A",
                                    "5": "M",
                                    "6": "J",
                                    "7": "J",
                                    "8": "A",
                                    "9": "S",
                                    "10": "O",
                                    "11": "N",
                                    "12": "D"
                                },
                                "wide": {
                                    "1": "janvier",
                                    "2": "février",
                                    "3": "mars",
                                    "4": "avril",
                                    "5": "mai",
                                    "6": "juin",
                                    "7": "juillet",
                                    "8": "août",
                                    "9": "septembre",
                                    "10": "octobre",
                                    "11": "novembre",
                                    "12": "décembre"
                                }
                            },
                            "stand-alone": {
                                "abbreviated": {
                                    "1": "janv.",
                                    "2": "févr.",
                                    "3": "mars",
                                    "4": "avr.",
                                    "5": "mai",
                                    "6": "juin",
                                    "7": "juil.",
                                    "8": "août",
                                    "9": "sept.",
                                    "10": "oct.",
                                    "11": "nov.",
                                    "12": "déc."
                                },
                                "narrow": {
                                    "1": "J",
                                    "2": "F",
                                    "3": "M",
                                    "4": "A",
                                    "5": "M",
                                    "6": "J",
                                    "7": "J",
                                    "8": "A",
                                    "9": "S",
                                    "10": "O",
                                    "11": "N",
                                    "12": "D"
                                },
                                "wide": {
                                    "1": "janvier",
                                    "2": "février",
                                    "3": "mars",
                                    "4": "avril",
                                    "5": "mai",
                                    "6": "juin",
                                    "7": "juillet",
                                    "8": "août",
                                    "9": "septembre",
                                    "10": "octobre",
                                    "11": "novembre",
                                    "12": "décembre"
                                }
                            }
                        },
                        "days": {
                            "format": {
                                "abbreviated": {
                                    "sun": "dim.",
                                    "mon": "lun.",
                                    "tue": "mar.",
                                    "wed": "mer.",
                                    "thu": "jeu.",
                                    "fri": "ven.",
                                    "sat": "sam."
                                },
                                "narrow": {
                                    "sun": "D",
                                    "mon": "L",
                                    "tue": "M",
                                    "wed": "M",
                                    "thu": "J",
                                    "fri": "V",
                                    "sat": "S"
                                },
                                "short": {
                                    "sun": "di",
                                    "mon": "lu",
                                    "tue": "ma",
                                    "wed": "me",
                                    "thu": "je",
                                    "fri": "ve",
                                    "sat": "sa"
                                },
                                "wide": {
                                    "sun": "dimanche",
                                    "mon": "lundi",
                                    "tue": "mardi",
                                    "wed": "mercredi",
                                    "thu": "jeudi",
                                    "fri": "vendredi",
                                    "sat": "samedi"
                                }
                            },
                            "stand-alone": {
                                "abbreviated": {
                                    "sun": "dim.",
                                    "mon": "lun.",
                                    "tue": "mar.",
                                    "wed": "mer.",
                                    "thu": "jeu.",
                                    "fri": "ven.",
                                    "sat": "sam."
                                },
                                "narrow": {
                                    "sun": "D",
                                    "mon": "L",
                                    "tue": "M",
                                    "wed": "M",
                                    "thu": "J",
                                    "fri": "V",
                                    "sat": "S"
                                },
                                "short": {
                                    "sun": "di",
                                    "mon": "lu",
                                    "tue": "ma",
                                    "wed": "me",
                                    "thu": "je",
                                    "fri": "ve",
                                    "sat": "sa"
                                },
                                "wide": {
                                    "sun": "dimanche",
                                    "mon": "lundi",
                                    "tue": "mardi",
                                    "wed": "mercredi",
                                    "thu": "jeudi",
                                    "fri": "vendredi",
                                    "sat": "samedi"
                                }
                            }
                        },
                        "quarters": {
                            "format": {
                                "abbreviated": {
                                    "1": "T1",
                                    "2": "T2",
                                    "3": "T3",
                                    "4": "T4"
                                },
                                "narrow": {
                                    "1": "1",
                                    "2": "2",
                                    "3": "3",
                                    "4": "4"
                                },
                                "wide": {
                                    "1": "1er trimestre",
                                    "2": "2e trimestre",
                                    "3": "3e trimestre",
                                    "4": "4e trimestre"
                                }
                            },
                            "stand-alone": {
                                "abbreviated": {
                                    "1": "T1",
                                    "2": "T2",
                                    "3": "T3",
                                    "4": "T4"
                                },
                                "narrow": {
                                    "1": "1",
                                    "2": "2",
                                    "3": "3",
                                    "4": "4"
                                },
                                "wide": {
                                    "1": "1er trimestre",
                                    "2": "2e trimestre",
                                    "3": "3e trimestre",
                                    "4": "4e trimestre"
                                }
                            }
                        },
                        "dayPeriods": {
                            "format": {
                                "abbreviated": {
                                    "midnight": "min.",
                                    "am": "AM",
                                    "noon": "midi",
                                    "pm": "PM",
                                    "morning1": "du mat.",
                                    "afternoon1": "de l’ap.m.",
                                    "evening1": "du soir",
                                    "night1": "du mat."
                                },
                                "narrow": {
                                    "midnight": "min.",
                                    "am": "AM",
                                    "noon": "midi",
                                    "pm": "PM",
                                    "morning1": "du mat.",
                                    "afternoon1": "de l’ap.m.",
                                    "evening1": "du soir",
                                    "night1": "du mat."
                                },
                                "wide": {
                                    "midnight": "minuit",
                                    "am": "AM",
                                    "noon": "midi",
                                    "pm": "PM",
                                    "morning1": "du matin",
                                    "afternoon1": "de l’après-midi",
                                    "evening1": "du soir",
                                    "night1": "du matin"
                                }
                            },
                            "stand-alone": {
                                "abbreviated": {
                                    "midnight": "min.",
                                    "am": "AM",
                                    "noon": "midi",
                                    "pm": "PM",
                                    "morning1": "mat.",
                                    "afternoon1": "ap.m.",
                                    "evening1": "soir",
                                    "night1": "nuit"
                                },
                                "narrow": {
                                    "midnight": "min.",
                                    "am": "AM",
                                    "noon": "midi",
                                    "pm": "PM",
                                    "morning1": "mat.",
                                    "afternoon1": "ap.m.",
                                    "evening1": "soir",
                                    "night1": "nuit"
                                },
                                "wide": {
                                    "midnight": "minuit",
                                    "am": "AM",
                                    "noon": "midi",
                                    "pm": "PM",
                                    "morning1": "matin",
                                    "afternoon1": "après-midi",
                                    "evening1": "soir",
                                    "night1": "nuit"
                                }
                            }
                        },
                        "eras": {
                            "eraNames": {
                                "0": "avant Jésus-Christ",
                                "0-alt-variant": "avant l’ère commune",
                                "1": "après Jésus-Christ",
                                "1-alt-variant": "de l’ère commune"
                            },
                            "eraAbbr": {
                                "0": "av. J.-C.",
                                "0-alt-variant": "AEC",
                                "1": "ap. J.-C.",
                                "1-alt-variant": "EC"
                            },
                            "eraNarrow": {
                                "0": "av. J.-C.",
                                "0-alt-variant": "AEC",
                                "1": "ap. J.-C.",
                                "1-alt-variant": "EC"
                            }
                        },
                        "dateFormats": {
                            "full": "EEEE, d MMMM y",
                            "long": "d MMMM y",
                            "medium": "d MMM y",
                            "short": "dd.MM.yy"
                        },
                        "timeFormats": {
                            "full": "HH.mm:ss 'h' zzzz",
                            "long": "HH:mm:ss z",
                            "medium": "HH:mm:ss",
                            "short": "HH:mm"
                        },
                        "dateTimeFormats": {
                            "full": "{1} 'à' {0}",
                            "long": "{1} 'à' {0}",
                            "medium": "{1} 'à' {0}",
                            "short": "{1} {0}",
                            "availableFormats": {
                                "Bh": "h B",
                                "Bhm": "h:mm B",
                                "Bhms": "h:mm:ss B",
                                "d": "d",
                                "E": "E",
                                "EBhm": "E h:mm B",
                                "EBhms": "E h:mm:ss B",
                                "Ed": "E d",
                                "Ehm": "E h:mm a",
                                "EHm": "E HH:mm",
                                "Ehms": "E h:mm:ss a",
                                "EHms": "E HH:mm:ss",
                                "Gy": "y G",
                                "GyMMM": "MMM y G",
                                "GyMMMd": "d MMM y G",
                                "GyMMMEd": "E d MMM y G",
                                "h": "h a",
                                "H": "HH 'h'",
                                "hm": "h:mm a",
                                "Hm": "HH:mm",
                                "hms": "h:mm:ss a",
                                "Hms": "HH:mm:ss",
                                "hmsv": "h:mm:ss a v",
                                "Hmsv": "HH:mm:ss v",
                                "hmv": "h:mm a v",
                                "Hmv": "HH:mm v",
                                "M": "L",
                                "Md": "dd.MM.",
                                "MEd": "E, dd.MM.",
                                "MMdd": "dd.MM",
                                "MMM": "LLL",
                                "MMMd": "d MMM",
                                "MMMEd": "E d MMM",
                                "MMMMd": "d MMMM",
                                "MMMMW-count-one": "'semaine' W (MMMM)",
                                "MMMMW-count-other": "'semaine' W (MMMM)",
                                "ms": "mm:ss",
                                "y": "y",
                                "yM": "MM.y",
                                "yMd": "dd.MM.y",
                                "yMEd": "E, dd.MM.y",
                                "yMMM": "MMM y",
                                "yMMMd": "d MMM y",
                                "yMMMEd": "E d MMM y",
                                "yMMMM": "MMMM y",
                                "yQQQ": "QQQ y",
                                "yQQQQ": "QQQQ y",
                                "yw-count-one": "'semaine' w 'de' Y",
                                "yw-count-other": "'semaine' w 'de' Y"
                            },
                            "appendItems": {
                                "Day": "{0} ({2}: {1})",
                                "Day-Of-Week": "{0} {1}",
                                "Era": "{1} {0}",
                                "Hour": "{0} ({2}: {1})",
                                "Minute": "{0} ({2}: {1})",
                                "Month": "{0} ({2}: {1})",
                                "Quarter": "{0} ({2}: {1})",
                                "Second": "{0} ({2}: {1})",
                                "Timezone": "{0} {1}",
                                "Week": "{0} ({2}: {1})",
                                "Year": "{1} {0}"
                            },
                            "intervalFormats": {
                                "intervalFormatFallback": "{0} – {1}",
                                "Bh": {
                                    "B": "h B – h B",
                                    "h": "h – h B"
                                },
                                "Bhm": {
                                    "B": "h:mm B – h:mm B",
                                    "h": "h:mm – h:mm B",
                                    "m": "h:mm – h:mm B"
                                },
                                "d": {
                                    "d": "d–d"
                                },
                                "Gy": {
                                    "G": "y G 'à' y G",
                                    "y": "y–y G"
                                },
                                "GyM": {
                                    "G": "M/y G 'à' M/y G",
                                    "M": "M–M/y G",
                                    "y": "M/y 'à' M/y G"
                                },
                                "GyMd": {
                                    "d": "d–d/M/y G",
                                    "G": "d/M/y G 'à' d/M/y G",
                                    "M": "d/M 'à' d/M/y G",
                                    "y": "d/M/y 'à' d/M/y G"
                                },
                                "GyMEd": {
                                    "d": "E d 'à' E d/M/y G",
                                    "G": "E d/M/y G 'à' E d/M/y G",
                                    "M": "E d/M 'à' E d/M/y G",
                                    "y": "E d/M/y 'à' E d/M/y G"
                                },
                                "GyMMM": {
                                    "G": "MMM y G 'à' MMM y G",
                                    "M": "MMM 'à' MMM y G",
                                    "y": "MMM y 'à' MMM y G"
                                },
                                "GyMMMd": {
                                    "d": "d–d MMM y G",
                                    "G": "d MMM y G 'à' d MMM y G",
                                    "M": "d MMM 'à' d MMM y G",
                                    "y": "d MMM y 'à' d MMM y G"
                                },
                                "GyMMMEd": {
                                    "d": "E d 'à' E d MMM y G",
                                    "G": "E d MMM y G 'à' E d MMM y G",
                                    "M": "E d MMM 'à' E d MMM y G",
                                    "y": "E d MMM y 'à' E d MMM y G"
                                },
                                "h": {
                                    "a": "h a – h a",
                                    "h": "h – h a"
                                },
                                "H": {
                                    "H": "HH – HH"
                                },
                                "hm": {
                                    "a": "h:mm a – h:mm a",
                                    "h": "h:mm – h:mm a",
                                    "m": "h:mm – h:mm a"
                                },
                                "Hm": {
                                    "H": "HH:mm – HH:mm",
                                    "m": "HH:mm – HH:mm"
                                },
                                "hmv": {
                                    "a": "h:mm a – h:mm a v",
                                    "h": "h:mm – h:mm a v",
                                    "m": "h:mm – h:mm a v"
                                },
                                "Hmv": {
                                    "H": "HH:mm – HH:mm v",
                                    "m": "HH:mm – HH:mm v"
                                },
                                "hv": {
                                    "a": "h a – h a v",
                                    "h": "h – h a v"
                                },
                                "Hv": {
                                    "H": "HH – HH v"
                                },
                                "M": {
                                    "M": "M–M"
                                },
                                "Md": {
                                    "d": "dd.MM – dd.MM",
                                    "M": "dd.MM – dd.MM"
                                },
                                "MEd": {
                                    "d": "E, dd.MM – E, dd.MM",
                                    "M": "E, dd.MM – E, dd.MM"
                                },
                                "MMM": {
                                    "M": "MMM–MMM"
                                },
                                "MMMd": {
                                    "d": "d–d MMM",
                                    "M": "d MMM – d MMM"
                                },
                                "MMMEd": {
                                    "d": "E d – E d MMM",
                                    "M": "E d MMM – E d MMM"
                                },
                                "y": {
                                    "y": "y–y"
                                },
                                "yM": {
                                    "M": "MM.y – MM.y",
                                    "y": "MM.y – MM.y"
                                },
                                "yMd": {
                                    "d": "dd.MM.y – dd.MM.y",
                                    "M": "dd.MM.y – dd.MM.y",
                                    "y": "dd.MM.y – dd.MM.y"
                                },
                                "yMEd": {
                                    "d": "E, dd.MM.y – E, dd.MM.y",
                                    "M": "E, dd.MM.y – E, dd.MM.y",
                                    "y": "E, dd.MM.y – E, dd.MM.y"
                                },
                                "yMMM": {
                                    "M": "MMM–MMM y",
                                    "y": "MMM y – MMM y"
                                },
                                "yMMMd": {
                                    "d": "d–d MMM y",
                                    "M": "d MMM – d MMM y",
                                    "y": "d MMM y – d MMM y"
                                },
                                "yMMMEd": {
                                    "d": "E d – E d MMM y",
                                    "M": "E d MMM – E d MMM y",
                                    "y": "E d MMM y – E d MMM y"
                                },
                                "yMMMM": {
                                    "M": "MMMM – MMMM y",
                                    "y": "MMMM y – MMMM y"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
// The data of the "cldr-data/main/fr-CH/numbers.json" file
const numberFormat = {
    "main": {
        "fr-CH": {
            "identity": {
                "version": {
                    "_cldrVersion": "36"
                },
                "language": "fr",
                "territory": "CH"
            },
            "numbers": {
                "defaultNumberingSystem": "latn",
                "otherNumberingSystems": {
                    "native": "latn"
                },
                "minimumGroupingDigits": "1",
                "symbols-numberSystem-latn": {
                    "decimal": ",",
                    "group": " ",
                    "list": ";",
                    "percentSign": "%",
                    "plusSign": "+",
                    "minusSign": "-",
                    "exponential": "E",
                    "superscriptingExponent": "×",
                    "perMille": "‰",
                    "infinity": "∞",
                    "nan": "NaN",
                    "currencyDecimal": ".",
                    "timeSeparator": ":"
                },
                "decimalFormats-numberSystem-latn": {
                    "standard": "#,##0.###",
                    "long": {
                        "decimalFormat": {
                            "1000-count-one": "0 millier",
                            "1000-count-other": "0 mille",
                            "10000-count-one": "00 mille",
                            "10000-count-other": "00 mille",
                            "100000-count-one": "000 mille",
                            "100000-count-other": "000 mille",
                            "1000000-count-one": "0 million",
                            "1000000-count-other": "0 millions",
                            "10000000-count-one": "00 million",
                            "10000000-count-other": "00 millions",
                            "100000000-count-one": "000 million",
                            "100000000-count-other": "000 millions",
                            "1000000000-count-one": "0 milliard",
                            "1000000000-count-other": "0 milliards",
                            "10000000000-count-one": "00 milliard",
                            "10000000000-count-other": "00 milliards",
                            "100000000000-count-one": "000 milliard",
                            "100000000000-count-other": "000 milliards",
                            "1000000000000-count-one": "0 billion",
                            "1000000000000-count-other": "0 billions",
                            "10000000000000-count-one": "00 billion",
                            "10000000000000-count-other": "00 billions",
                            "100000000000000-count-one": "000 billion",
                            "100000000000000-count-other": "000 billions"
                        }
                    },
                    "short": {
                        "decimalFormat": {
                            "1000-count-one": "0 k",
                            "1000-count-other": "0 k",
                            "10000-count-one": "00 k",
                            "10000-count-other": "00 k",
                            "100000-count-one": "000 k",
                            "100000-count-other": "000 k",
                            "1000000-count-one": "0 M",
                            "1000000-count-other": "0 M",
                            "10000000-count-one": "00 M",
                            "10000000-count-other": "00 M",
                            "100000000-count-one": "000 M",
                            "100000000-count-other": "000 M",
                            "1000000000-count-one": "0 Md",
                            "1000000000-count-other": "0 Md",
                            "10000000000-count-one": "00 Md",
                            "10000000000-count-other": "00 Md",
                            "100000000000-count-one": "000 Md",
                            "100000000000-count-other": "000 Md",
                            "1000000000000-count-one": "0 Bn",
                            "1000000000000-count-other": "0 Bn",
                            "10000000000000-count-one": "00 Bn",
                            "10000000000000-count-other": "00 Bn",
                            "100000000000000-count-one": "000 Bn",
                            "100000000000000-count-other": "000 Bn"
                        }
                    }
                },
                "scientificFormats-numberSystem-latn": {
                    "standard": "#E0"
                },
                "percentFormats-numberSystem-latn": {
                    "standard": "#,##0%"
                },
                "currencyFormats-numberSystem-latn": {
                    "currencySpacing": {
                        "beforeCurrency": {
                            "currencyMatch": "[:^S:]",
                            "surroundingMatch": "[:digit:]",
                            "insertBetween": " "
                        },
                        "afterCurrency": {
                            "currencyMatch": "[:^S:]",
                            "surroundingMatch": "[:digit:]",
                            "insertBetween": " "
                        }
                    },
                    "standard": "#,##0.00 ¤",
                    "accounting": "#,##0.00 ¤;(#,##0.00 ¤)",
                    "short": {
                        "standard": {
                            "1000-count-one": "0 k ¤",
                            "1000-count-other": "0 k ¤",
                            "10000-count-one": "00 k ¤",
                            "10000-count-other": "00 k ¤",
                            "100000-count-one": "000 k ¤",
                            "100000-count-other": "000 k ¤",
                            "1000000-count-one": "0 M ¤",
                            "1000000-count-other": "0 M ¤",
                            "10000000-count-one": "00 M ¤",
                            "10000000-count-other": "00 M ¤",
                            "100000000-count-one": "000 M ¤",
                            "100000000-count-other": "000 M ¤",
                            "1000000000-count-one": "0 Md ¤",
                            "1000000000-count-other": "0 Md ¤",
                            "10000000000-count-one": "00 Md ¤",
                            "10000000000-count-other": "00 Md ¤",
                            "100000000000-count-one": "000 Md ¤",
                            "100000000000-count-other": "000 Md ¤",
                            "1000000000000-count-one": "0 Bn ¤",
                            "1000000000000-count-other": "0 Bn ¤",
                            "10000000000000-count-one": "00 Bn ¤",
                            "10000000000000-count-other": "00 Bn ¤",
                            "100000000000000-count-one": "000 Bn ¤",
                            "100000000000000-count-other": "000 Bn ¤"
                        }
                    },
                    "unitPattern-count-one": "{0} {1}",
                    "unitPattern-count-other": "{0} {1}"
                },
                "miscPatterns-numberSystem-latn": {
                    "approximately": "≈{0}",
                    "atLeast": "≥{0}",
                    "atMost": "≤{0}",
                    "range": "{0}–{1}"
                },
                "minimalPairs": {
                    "pluralMinimalPairs-count-one": "{0} jour",
                    "pluralMinimalPairs-count-other": "{0} jours",
                    "one": "Prenez la {0}re à droite.",
                    "other": "Prenez la {0}e à droite."
                }
            }
        }
    }
}
// The data of the "cldr-data/main/fr-CH/timeZoneNames.json" file
const timeZone = {
    "main": {
        "fr-CH": {
            "identity": {
                "version": {
                    "_cldrVersion": "36"
                },
                "language": "fr",
                "territory": "CH"
            },
            "dates": {
                "timeZoneNames": {
                    "hourFormat": "+HH:mm;−HH:mm",
                    "gmtFormat": "UTC{0}",
                    "gmtZeroFormat": "UTC",
                    "regionFormat": "heure : {0}",
                    "regionFormat-type-daylight": "{0} (heure d’été)",
                    "regionFormat-type-standard": "{0} (heure standard)",
                    "fallbackFormat": "{1} ({0})",
                    "zone": {
                        "America": {
                            "Adak": {
                                "exemplarCity": "Adak"
                            },
                            "Anchorage": {
                                "exemplarCity": "Anchorage"
                            },
                            "Anguilla": {
                                "exemplarCity": "Anguilla"
                            },
                            "Antigua": {
                                "exemplarCity": "Antigua"
                            },
                            "Araguaina": {
                                "exemplarCity": "Araguaína"
                            },
                            "Argentina": {
                                "Rio_Gallegos": {
                                    "exemplarCity": "Río Gallegos"
                                },
                                "San_Juan": {
                                    "exemplarCity": "San Juan"
                                },
                                "Ushuaia": {
                                    "exemplarCity": "Ushuaïa"
                                },
                                "La_Rioja": {
                                    "exemplarCity": "La Rioja"
                                },
                                "San_Luis": {
                                    "exemplarCity": "San Luis"
                                },
                                "Salta": {
                                    "exemplarCity": "Salta"
                                },
                                "Tucuman": {
                                    "exemplarCity": "Tucumán"
                                }
                            },
                            "Aruba": {
                                "exemplarCity": "Aruba"
                            },
                            "Asuncion": {
                                "exemplarCity": "Asunción"
                            },
                            "Bahia": {
                                "exemplarCity": "Bahia"
                            },
                            "Bahia_Banderas": {
                                "exemplarCity": "Bahia de Banderas"
                            },
                            "Barbados": {
                                "exemplarCity": "La Barbade"
                            },
                            "Belem": {
                                "exemplarCity": "Belém"
                            },
                            "Belize": {
                                "exemplarCity": "Belize"
                            },
                            "Blanc-Sablon": {
                                "exemplarCity": "Blanc-Sablon"
                            },
                            "Boa_Vista": {
                                "exemplarCity": "Boa Vista"
                            },
                            "Bogota": {
                                "exemplarCity": "Bogota"
                            },
                            "Boise": {
                                "exemplarCity": "Boise"
                            },
                            "Buenos_Aires": {
                                "exemplarCity": "Buenos Aires"
                            },
                            "Cambridge_Bay": {
                                "exemplarCity": "Cambridge Bay"
                            },
                            "Campo_Grande": {
                                "exemplarCity": "Campo Grande"
                            },
                            "Cancun": {
                                "exemplarCity": "Cancún"
                            },
                            "Caracas": {
                                "exemplarCity": "Caracas"
                            },
                            "Catamarca": {
                                "exemplarCity": "Catamarca"
                            },
                            "Cayenne": {
                                "exemplarCity": "Cayenne"
                            },
                            "Cayman": {
                                "exemplarCity": "Caïmans"
                            },
                            "Chicago": {
                                "exemplarCity": "Chicago"
                            },
                            "Chihuahua": {
                                "exemplarCity": "Chihuahua"
                            },
                            "Coral_Harbour": {
                                "exemplarCity": "Atikokan"
                            },
                            "Cordoba": {
                                "exemplarCity": "Córdoba"
                            },
                            "Costa_Rica": {
                                "exemplarCity": "Costa Rica"
                            },
                            "Creston": {
                                "exemplarCity": "Creston"
                            },
                            "Cuiaba": {
                                "exemplarCity": "Cuiabá"
                            },
                            "Curacao": {
                                "exemplarCity": "Curaçao"
                            },
                            "Danmarkshavn": {
                                "exemplarCity": "Danmarkshavn"
                            },
                            "Dawson": {
                                "exemplarCity": "Dawson"
                            },
                            "Dawson_Creek": {
                                "exemplarCity": "Dawson Creek"
                            },
                            "Denver": {
                                "exemplarCity": "Denver"
                            },
                            "Detroit": {
                                "exemplarCity": "Détroit"
                            },
                            "Dominica": {
                                "exemplarCity": "Dominique"
                            },
                            "Edmonton": {
                                "exemplarCity": "Edmonton"
                            },
                            "Eirunepe": {
                                "exemplarCity": "Eirunepé"
                            },
                            "El_Salvador": {
                                "exemplarCity": "El Salvador"
                            },
                            "Fort_Nelson": {
                                "exemplarCity": "Fort Nelson"
                            },
                            "Fortaleza": {
                                "exemplarCity": "Fortaleza"
                            },
                            "Glace_Bay": {
                                "exemplarCity": "Glace Bay"
                            },
                            "Godthab": {
                                "exemplarCity": "Nuuk"
                            },
                            "Goose_Bay": {
                                "exemplarCity": "Goose Bay"
                            },
                            "Grand_Turk": {
                                "exemplarCity": "Grand Turk"
                            },
                            "Grenada": {
                                "exemplarCity": "Grenade"
                            },
                            "Guadeloupe": {
                                "exemplarCity": "Guadeloupe"
                            },
                            "Guatemala": {
                                "exemplarCity": "Guatemala"
                            },
                            "Guayaquil": {
                                "exemplarCity": "Guayaquil"
                            },
                            "Guyana": {
                                "exemplarCity": "Guyana"
                            },
                            "Halifax": {
                                "exemplarCity": "Halifax"
                            },
                            "Havana": {
                                "exemplarCity": "La Havane"
                            },
                            "Hermosillo": {
                                "exemplarCity": "Hermosillo"
                            },
                            "Indiana": {
                                "Vincennes": {
                                    "exemplarCity": "Vincennes [Indiana]"
                                },
                                "Petersburg": {
                                    "exemplarCity": "Petersburg [Indiana]"
                                },
                                "Tell_City": {
                                    "exemplarCity": "Tell City [Indiana]"
                                },
                                "Knox": {
                                    "exemplarCity": "Knox [Indiana]"
                                },
                                "Winamac": {
                                    "exemplarCity": "Winamac [Indiana]"
                                },
                                "Marengo": {
                                    "exemplarCity": "Marengo [Indiana]"
                                },
                                "Vevay": {
                                    "exemplarCity": "Vevay [Indiana]"
                                }
                            },
                            "Indianapolis": {
                                "exemplarCity": "Indianapolis"
                            },
                            "Inuvik": {
                                "exemplarCity": "Inuvik"
                            },
                            "Iqaluit": {
                                "exemplarCity": "Iqaluit"
                            },
                            "Jamaica": {
                                "exemplarCity": "Jamaïque"
                            },
                            "Jujuy": {
                                "exemplarCity": "Jujuy"
                            },
                            "Juneau": {
                                "exemplarCity": "Juneau"
                            },
                            "Kentucky": {
                                "Monticello": {
                                    "exemplarCity": "Monticello [Kentucky]"
                                }
                            },
                            "Kralendijk": {
                                "exemplarCity": "Kralendijk"
                            },
                            "La_Paz": {
                                "exemplarCity": "La Paz"
                            },
                            "Lima": {
                                "exemplarCity": "Lima"
                            },
                            "Los_Angeles": {
                                "exemplarCity": "Los Angeles"
                            },
                            "Louisville": {
                                "exemplarCity": "Louisville"
                            },
                            "Lower_Princes": {
                                "exemplarCity": "Lower Prince’s Quarter"
                            },
                            "Maceio": {
                                "exemplarCity": "Maceió"
                            },
                            "Managua": {
                                "exemplarCity": "Managua"
                            },
                            "Manaus": {
                                "exemplarCity": "Manaos"
                            },
                            "Marigot": {
                                "exemplarCity": "Marigot"
                            },
                            "Martinique": {
                                "exemplarCity": "Martinique"
                            },
                            "Matamoros": {
                                "exemplarCity": "Matamoros"
                            },
                            "Mazatlan": {
                                "exemplarCity": "Mazatlán"
                            },
                            "Mendoza": {
                                "exemplarCity": "Mendoza"
                            },
                            "Menominee": {
                                "exemplarCity": "Menominee"
                            },
                            "Merida": {
                                "exemplarCity": "Mérida"
                            },
                            "Metlakatla": {
                                "exemplarCity": "Metlakatla"
                            },
                            "Mexico_City": {
                                "exemplarCity": "Mexico"
                            },
                            "Miquelon": {
                                "exemplarCity": "Miquelon"
                            },
                            "Moncton": {
                                "exemplarCity": "Moncton"
                            },
                            "Monterrey": {
                                "exemplarCity": "Monterrey"
                            },
                            "Montevideo": {
                                "exemplarCity": "Montevideo"
                            },
                            "Montserrat": {
                                "exemplarCity": "Montserrat"
                            },
                            "Nassau": {
                                "exemplarCity": "Nassau"
                            },
                            "New_York": {
                                "exemplarCity": "New York"
                            },
                            "Nipigon": {
                                "exemplarCity": "Nipigon"
                            },
                            "Nome": {
                                "exemplarCity": "Nome"
                            },
                            "Noronha": {
                                "exemplarCity": "Noronha"
                            },
                            "North_Dakota": {
                                "Beulah": {
                                    "exemplarCity": "Beulah (Dakota du Nord)"
                                },
                                "New_Salem": {
                                    "exemplarCity": "New Salem (Dakota du Nord)"
                                },
                                "Center": {
                                    "exemplarCity": "Center (Dakota du Nord)"
                                }
                            },
                            "Ojinaga": {
                                "exemplarCity": "Ojinaga"
                            },
                            "Panama": {
                                "exemplarCity": "Panama"
                            },
                            "Pangnirtung": {
                                "exemplarCity": "Pangnirtung"
                            },
                            "Paramaribo": {
                                "exemplarCity": "Paramaribo"
                            },
                            "Phoenix": {
                                "exemplarCity": "Phoenix"
                            },
                            "Port-au-Prince": {
                                "exemplarCity": "Port-au-Prince"
                            },
                            "Port_of_Spain": {
                                "exemplarCity": "Port-d’Espagne"
                            },
                            "Porto_Velho": {
                                "exemplarCity": "Porto Velho"
                            },
                            "Puerto_Rico": {
                                "exemplarCity": "Porto Rico"
                            },
                            "Punta_Arenas": {
                                "exemplarCity": "Punta Arenas"
                            },
                            "Rainy_River": {
                                "exemplarCity": "Rainy River"
                            },
                            "Rankin_Inlet": {
                                "exemplarCity": "Rankin Inlet"
                            },
                            "Recife": {
                                "exemplarCity": "Recife"
                            },
                            "Regina": {
                                "exemplarCity": "Regina"
                            },
                            "Resolute": {
                                "exemplarCity": "Resolute"
                            },
                            "Rio_Branco": {
                                "exemplarCity": "Rio Branco"
                            },
                            "Santa_Isabel": {
                                "exemplarCity": "Santa Isabel"
                            },
                            "Santarem": {
                                "exemplarCity": "Santarém"
                            },
                            "Santiago": {
                                "exemplarCity": "Santiago"
                            },
                            "Santo_Domingo": {
                                "exemplarCity": "Saint-Domingue"
                            },
                            "Sao_Paulo": {
                                "exemplarCity": "São Paulo"
                            },
                            "Scoresbysund": {
                                "exemplarCity": "Ittoqqortoormiit"
                            },
                            "Sitka": {
                                "exemplarCity": "Sitka"
                            },
                            "St_Barthelemy": {
                                "exemplarCity": "Saint-Barthélemy"
                            },
                            "St_Johns": {
                                "exemplarCity": "Saint-Jean de Terre-Neuve"
                            },
                            "St_Kitts": {
                                "exemplarCity": "Saint-Christophe"
                            },
                            "St_Lucia": {
                                "exemplarCity": "Sainte-Lucie"
                            },
                            "St_Thomas": {
                                "exemplarCity": "Saint-Thomas"
                            },
                            "St_Vincent": {
                                "exemplarCity": "Saint-Vincent"
                            },
                            "Swift_Current": {
                                "exemplarCity": "Swift Current"
                            },
                            "Tegucigalpa": {
                                "exemplarCity": "Tégucigalpa"
                            },
                            "Thule": {
                                "exemplarCity": "Thulé"
                            },
                            "Thunder_Bay": {
                                "exemplarCity": "Thunder Bay"
                            },
                            "Tijuana": {
                                "exemplarCity": "Tijuana"
                            },
                            "Toronto": {
                                "exemplarCity": "Toronto"
                            },
                            "Tortola": {
                                "exemplarCity": "Tortola"
                            },
                            "Vancouver": {
                                "exemplarCity": "Vancouver"
                            },
                            "Whitehorse": {
                                "exemplarCity": "Whitehorse"
                            },
                            "Winnipeg": {
                                "exemplarCity": "Winnipeg"
                            },
                            "Yakutat": {
                                "exemplarCity": "Yakutat"
                            },
                            "Yellowknife": {
                                "exemplarCity": "Yellowknife"
                            }
                        },
                        "Atlantic": {
                            "Azores": {
                                "exemplarCity": "Açores"
                            },
                            "Bermuda": {
                                "exemplarCity": "Bermudes"
                            },
                            "Canary": {
                                "exemplarCity": "Îles Canaries"
                            },
                            "Cape_Verde": {
                                "exemplarCity": "Cap-Vert"
                            },
                            "Faeroe": {
                                "exemplarCity": "Féroé"
                            },
                            "Madeira": {
                                "exemplarCity": "Madère"
                            },
                            "Reykjavik": {
                                "exemplarCity": "Reykjavik"
                            },
                            "South_Georgia": {
                                "exemplarCity": "Géorgie du Sud"
                            },
                            "St_Helena": {
                                "exemplarCity": "Sainte-Hélène"
                            },
                            "Stanley": {
                                "exemplarCity": "Stanley"
                            }
                        },
                        "Europe": {
                            "Amsterdam": {
                                "exemplarCity": "Amsterdam"
                            },
                            "Andorra": {
                                "exemplarCity": "Andorre"
                            },
                            "Astrakhan": {
                                "exemplarCity": "Astrakhan"
                            },
                            "Athens": {
                                "exemplarCity": "Athènes"
                            },
                            "Belgrade": {
                                "exemplarCity": "Belgrade"
                            },
                            "Berlin": {
                                "exemplarCity": "Berlin"
                            },
                            "Bratislava": {
                                "exemplarCity": "Bratislava"
                            },
                            "Brussels": {
                                "exemplarCity": "Bruxelles"
                            },
                            "Bucharest": {
                                "exemplarCity": "Bucarest"
                            },
                            "Budapest": {
                                "exemplarCity": "Budapest"
                            },
                            "Busingen": {
                                "exemplarCity": "Büsingen"
                            },
                            "Chisinau": {
                                "exemplarCity": "Chisinau"
                            },
                            "Copenhagen": {
                                "exemplarCity": "Copenhague"
                            },
                            "Dublin": {
                                "long": {
                                    "daylight": "heure d’été irlandaise"
                                },
                                "exemplarCity": "Dublin"
                            },
                            "Gibraltar": {
                                "exemplarCity": "Gibraltar"
                            },
                            "Guernsey": {
                                "exemplarCity": "Guernesey"
                            },
                            "Helsinki": {
                                "exemplarCity": "Helsinki"
                            },
                            "Isle_of_Man": {
                                "exemplarCity": "Île de Man"
                            },
                            "Istanbul": {
                                "exemplarCity": "Istanbul"
                            },
                            "Jersey": {
                                "exemplarCity": "Jersey"
                            },
                            "Kaliningrad": {
                                "exemplarCity": "Kaliningrad"
                            },
                            "Kiev": {
                                "exemplarCity": "Kiev"
                            },
                            "Kirov": {
                                "exemplarCity": "Kirov"
                            },
                            "Lisbon": {
                                "exemplarCity": "Lisbonne"
                            },
                            "Ljubljana": {
                                "exemplarCity": "Ljubljana"
                            },
                            "London": {
                                "long": {
                                    "daylight": "heure d’été britannique"
                                },
                                "exemplarCity": "Londres"
                            },
                            "Luxembourg": {
                                "exemplarCity": "Luxembourg"
                            },
                            "Madrid": {
                                "exemplarCity": "Madrid"
                            },
                            "Malta": {
                                "exemplarCity": "Malte"
                            },
                            "Mariehamn": {
                                "exemplarCity": "Mariehamn"
                            },
                            "Minsk": {
                                "exemplarCity": "Minsk"
                            },
                            "Monaco": {
                                "exemplarCity": "Monaco"
                            },
                            "Moscow": {
                                "exemplarCity": "Moscou"
                            },
                            "Oslo": {
                                "exemplarCity": "Oslo"
                            },
                            "Paris": {
                                "exemplarCity": "Paris"
                            },
                            "Podgorica": {
                                "exemplarCity": "Podgorica"
                            },
                            "Prague": {
                                "exemplarCity": "Prague"
                            },
                            "Riga": {
                                "exemplarCity": "Riga"
                            },
                            "Rome": {
                                "exemplarCity": "Rome"
                            },
                            "Samara": {
                                "exemplarCity": "Samara"
                            },
                            "San_Marino": {
                                "exemplarCity": "Saint-Marin"
                            },
                            "Sarajevo": {
                                "exemplarCity": "Sarajevo"
                            },
                            "Saratov": {
                                "exemplarCity": "Saratov"
                            },
                            "Simferopol": {
                                "exemplarCity": "Simferopol"
                            },
                            "Skopje": {
                                "exemplarCity": "Skopje"
                            },
                            "Sofia": {
                                "exemplarCity": "Sofia"
                            },
                            "Stockholm": {
                                "exemplarCity": "Stockholm"
                            },
                            "Tallinn": {
                                "exemplarCity": "Tallinn"
                            },
                            "Tirane": {
                                "exemplarCity": "Tirana"
                            },
                            "Ulyanovsk": {
                                "exemplarCity": "Oulianovsk"
                            },
                            "Uzhgorod": {
                                "exemplarCity": "Oujgorod"
                            },
                            "Vaduz": {
                                "exemplarCity": "Vaduz"
                            },
                            "Vatican": {
                                "exemplarCity": "Le Vatican"
                            },
                            "Vienna": {
                                "exemplarCity": "Vienne"
                            },
                            "Vilnius": {
                                "exemplarCity": "Vilnius"
                            },
                            "Volgograd": {
                                "exemplarCity": "Volgograd"
                            },
                            "Warsaw": {
                                "exemplarCity": "Varsovie"
                            },
                            "Zagreb": {
                                "exemplarCity": "Zagreb"
                            },
                            "Zaporozhye": {
                                "exemplarCity": "Zaporojie"
                            },
                            "Zurich": {
                                "exemplarCity": "Zurich"
                            }
                        },
                        "Africa": {
                            "Abidjan": {
                                "exemplarCity": "Abidjan"
                            },
                            "Accra": {
                                "exemplarCity": "Accra"
                            },
                            "Addis_Ababa": {
                                "exemplarCity": "Addis-Abeba"
                            },
                            "Algiers": {
                                "exemplarCity": "Alger"
                            },
                            "Asmera": {
                                "exemplarCity": "Asmara"
                            },
                            "Bamako": {
                                "exemplarCity": "Bamako"
                            },
                            "Bangui": {
                                "exemplarCity": "Bangui"
                            },
                            "Banjul": {
                                "exemplarCity": "Banjul"
                            },
                            "Bissau": {
                                "exemplarCity": "Bissau"
                            },
                            "Blantyre": {
                                "exemplarCity": "Blantyre"
                            },
                            "Brazzaville": {
                                "exemplarCity": "Brazzaville"
                            },
                            "Bujumbura": {
                                "exemplarCity": "Bujumbura"
                            },
                            "Cairo": {
                                "exemplarCity": "Le Caire"
                            },
                            "Casablanca": {
                                "exemplarCity": "Casablanca"
                            },
                            "Ceuta": {
                                "exemplarCity": "Ceuta"
                            },
                            "Conakry": {
                                "exemplarCity": "Conakry"
                            },
                            "Dakar": {
                                "exemplarCity": "Dakar"
                            },
                            "Dar_es_Salaam": {
                                "exemplarCity": "Dar es Salaam"
                            },
                            "Djibouti": {
                                "exemplarCity": "Djibouti"
                            },
                            "Douala": {
                                "exemplarCity": "Douala"
                            },
                            "El_Aaiun": {
                                "exemplarCity": "Laâyoune"
                            },
                            "Freetown": {
                                "exemplarCity": "Freetown"
                            },
                            "Gaborone": {
                                "exemplarCity": "Gaborone"
                            },
                            "Harare": {
                                "exemplarCity": "Harare"
                            },
                            "Johannesburg": {
                                "exemplarCity": "Johannesburg"
                            },
                            "Juba": {
                                "exemplarCity": "Juba"
                            },
                            "Kampala": {
                                "exemplarCity": "Kampala"
                            },
                            "Khartoum": {
                                "exemplarCity": "Khartoum"
                            },
                            "Kigali": {
                                "exemplarCity": "Kigali"
                            },
                            "Kinshasa": {
                                "exemplarCity": "Kinshasa"
                            },
                            "Lagos": {
                                "exemplarCity": "Lagos"
                            },
                            "Libreville": {
                                "exemplarCity": "Libreville"
                            },
                            "Lome": {
                                "exemplarCity": "Lomé"
                            },
                            "Luanda": {
                                "exemplarCity": "Luanda"
                            },
                            "Lubumbashi": {
                                "exemplarCity": "Lubumbashi"
                            },
                            "Lusaka": {
                                "exemplarCity": "Lusaka"
                            },
                            "Malabo": {
                                "exemplarCity": "Malabo"
                            },
                            "Maputo": {
                                "exemplarCity": "Maputo"
                            },
                            "Maseru": {
                                "exemplarCity": "Maseru"
                            },
                            "Mbabane": {
                                "exemplarCity": "Mbabane"
                            },
                            "Mogadishu": {
                                "exemplarCity": "Mogadiscio"
                            },
                            "Monrovia": {
                                "exemplarCity": "Monrovia"
                            },
                            "Nairobi": {
                                "exemplarCity": "Nairobi"
                            },
                            "Ndjamena": {
                                "exemplarCity": "N’Djamena"
                            },
                            "Niamey": {
                                "exemplarCity": "Niamey"
                            },
                            "Nouakchott": {
                                "exemplarCity": "Nouakchott"
                            },
                            "Ouagadougou": {
                                "exemplarCity": "Ouagadougou"
                            },
                            "Porto-Novo": {
                                "exemplarCity": "Porto-Novo"
                            },
                            "Sao_Tome": {
                                "exemplarCity": "São Tomé"
                            },
                            "Tripoli": {
                                "exemplarCity": "Tripoli (Libye)"
                            },
                            "Tunis": {
                                "exemplarCity": "Tunis"
                            },
                            "Windhoek": {
                                "exemplarCity": "Windhoek"
                            }
                        },
                        "Asia": {
                            "Aden": {
                                "exemplarCity": "Aden"
                            },
                            "Almaty": {
                                "exemplarCity": "Alma Ata"
                            },
                            "Amman": {
                                "exemplarCity": "Amman"
                            },
                            "Anadyr": {
                                "exemplarCity": "Anadyr"
                            },
                            "Aqtau": {
                                "exemplarCity": "Aktaou"
                            },
                            "Aqtobe": {
                                "exemplarCity": "Aktioubinsk"
                            },
                            "Ashgabat": {
                                "exemplarCity": "Achgabat"
                            },
                            "Atyrau": {
                                "exemplarCity": "Atyraou"
                            },
                            "Baghdad": {
                                "exemplarCity": "Bagdad"
                            },
                            "Bahrain": {
                                "exemplarCity": "Bahreïn"
                            },
                            "Baku": {
                                "exemplarCity": "Bakou"
                            },
                            "Bangkok": {
                                "exemplarCity": "Bangkok"
                            },
                            "Barnaul": {
                                "exemplarCity": "Barnaul"
                            },
                            "Beirut": {
                                "exemplarCity": "Beyrouth"
                            },
                            "Bishkek": {
                                "exemplarCity": "Bichkek"
                            },
                            "Brunei": {
                                "exemplarCity": "Brunei"
                            },
                            "Calcutta": {
                                "exemplarCity": "Calcutta"
                            },
                            "Chita": {
                                "exemplarCity": "Tchita"
                            },
                            "Choibalsan": {
                                "exemplarCity": "Tchoïbalsan"
                            },
                            "Colombo": {
                                "exemplarCity": "Colombo"
                            },
                            "Damascus": {
                                "exemplarCity": "Damas"
                            },
                            "Dhaka": {
                                "exemplarCity": "Dhaka"
                            },
                            "Dili": {
                                "exemplarCity": "Dili"
                            },
                            "Dubai": {
                                "exemplarCity": "Dubaï"
                            },
                            "Dushanbe": {
                                "exemplarCity": "Douchanbé"
                            },
                            "Famagusta": {
                                "exemplarCity": "Famagouste"
                            },
                            "Gaza": {
                                "exemplarCity": "Gaza"
                            },
                            "Hebron": {
                                "exemplarCity": "Hébron"
                            },
                            "Hong_Kong": {
                                "exemplarCity": "Hong Kong"
                            },
                            "Hovd": {
                                "exemplarCity": "Hovd"
                            },
                            "Irkutsk": {
                                "exemplarCity": "Irkoutsk"
                            },
                            "Jakarta": {
                                "exemplarCity": "Jakarta"
                            },
                            "Jayapura": {
                                "exemplarCity": "Jayapura"
                            },
                            "Jerusalem": {
                                "exemplarCity": "Jérusalem"
                            },
                            "Kabul": {
                                "exemplarCity": "Kaboul"
                            },
                            "Kamchatka": {
                                "exemplarCity": "Kamtchatka"
                            },
                            "Karachi": {
                                "exemplarCity": "Karachi"
                            },
                            "Katmandu": {
                                "exemplarCity": "Katmandou"
                            },
                            "Khandyga": {
                                "exemplarCity": "Khandyga"
                            },
                            "Krasnoyarsk": {
                                "exemplarCity": "Krasnoïarsk"
                            },
                            "Kuala_Lumpur": {
                                "exemplarCity": "Kuala Lumpur"
                            },
                            "Kuching": {
                                "exemplarCity": "Kuching"
                            },
                            "Kuwait": {
                                "exemplarCity": "Koweït"
                            },
                            "Macau": {
                                "exemplarCity": "Macao"
                            },
                            "Magadan": {
                                "exemplarCity": "Magadan"
                            },
                            "Makassar": {
                                "exemplarCity": "Macassar"
                            },
                            "Manila": {
                                "exemplarCity": "Manille"
                            },
                            "Muscat": {
                                "exemplarCity": "Mascate"
                            },
                            "Nicosia": {
                                "exemplarCity": "Nicosie"
                            },
                            "Novokuznetsk": {
                                "exemplarCity": "Novokuznetsk"
                            },
                            "Novosibirsk": {
                                "exemplarCity": "Novossibirsk"
                            },
                            "Omsk": {
                                "exemplarCity": "Omsk"
                            },
                            "Oral": {
                                "exemplarCity": "Ouralsk"
                            },
                            "Phnom_Penh": {
                                "exemplarCity": "Phnom Penh"
                            },
                            "Pontianak": {
                                "exemplarCity": "Pontianak"
                            },
                            "Pyongyang": {
                                "exemplarCity": "Pyongyang"
                            },
                            "Qatar": {
                                "exemplarCity": "Qatar"
                            },
                            "Qostanay": {
                                "exemplarCity": "Kostanaï"
                            },
                            "Qyzylorda": {
                                "exemplarCity": "Kzyl Orda"
                            },
                            "Rangoon": {
                                "exemplarCity": "Rangoun"
                            },
                            "Riyadh": {
                                "exemplarCity": "Riyad"
                            },
                            "Saigon": {
                                "exemplarCity": "Hô-Chi-Minh-Ville"
                            },
                            "Sakhalin": {
                                "exemplarCity": "Sakhaline"
                            },
                            "Samarkand": {
                                "exemplarCity": "Samarcande"
                            },
                            "Seoul": {
                                "exemplarCity": "Séoul"
                            },
                            "Shanghai": {
                                "exemplarCity": "Shanghai"
                            },
                            "Singapore": {
                                "exemplarCity": "Singapour"
                            },
                            "Srednekolymsk": {
                                "exemplarCity": "Srednekolymsk"
                            },
                            "Taipei": {
                                "exemplarCity": "Taipei"
                            },
                            "Tashkent": {
                                "exemplarCity": "Tachkent"
                            },
                            "Tbilisi": {
                                "exemplarCity": "Tbilissi"
                            },
                            "Tehran": {
                                "exemplarCity": "Téhéran"
                            },
                            "Thimphu": {
                                "exemplarCity": "Thimphu"
                            },
                            "Tokyo": {
                                "exemplarCity": "Tokyo"
                            },
                            "Tomsk": {
                                "exemplarCity": "Tomsk"
                            },
                            "Ulaanbaatar": {
                                "exemplarCity": "Oulan-Bator"
                            },
                            "Urumqi": {
                                "exemplarCity": "Ürümqi"
                            },
                            "Ust-Nera": {
                                "exemplarCity": "Ust-Nera"
                            },
                            "Vientiane": {
                                "exemplarCity": "Vientiane"
                            },
                            "Vladivostok": {
                                "exemplarCity": "Vladivostok"
                            },
                            "Yakutsk": {
                                "exemplarCity": "Iakoutsk"
                            },
                            "Yekaterinburg": {
                                "exemplarCity": "Ekaterinbourg"
                            },
                            "Yerevan": {
                                "exemplarCity": "Erevan"
                            }
                        },
                        "Indian": {
                            "Antananarivo": {
                                "exemplarCity": "Antananarivo"
                            },
                            "Chagos": {
                                "exemplarCity": "Chagos"
                            },
                            "Christmas": {
                                "exemplarCity": "Christmas"
                            },
                            "Cocos": {
                                "exemplarCity": "Cocos"
                            },
                            "Comoro": {
                                "exemplarCity": "Comores"
                            },
                            "Kerguelen": {
                                "exemplarCity": "Kerguelen"
                            },
                            "Mahe": {
                                "exemplarCity": "Mahé"
                            },
                            "Maldives": {
                                "exemplarCity": "Maldives"
                            },
                            "Mauritius": {
                                "exemplarCity": "Maurice"
                            },
                            "Mayotte": {
                                "exemplarCity": "Mayotte"
                            },
                            "Reunion": {
                                "exemplarCity": "La Réunion"
                            }
                        },
                        "Australia": {
                            "Adelaide": {
                                "exemplarCity": "Adélaïde"
                            },
                            "Brisbane": {
                                "exemplarCity": "Brisbane"
                            },
                            "Broken_Hill": {
                                "exemplarCity": "Broken Hill"
                            },
                            "Currie": {
                                "exemplarCity": "Currie"
                            },
                            "Darwin": {
                                "exemplarCity": "Darwin"
                            },
                            "Eucla": {
                                "exemplarCity": "Eucla"
                            },
                            "Hobart": {
                                "exemplarCity": "Hobart"
                            },
                            "Lindeman": {
                                "exemplarCity": "Lindeman"
                            },
                            "Lord_Howe": {
                                "exemplarCity": "Lord Howe"
                            },
                            "Melbourne": {
                                "exemplarCity": "Melbourne"
                            },
                            "Perth": {
                                "exemplarCity": "Perth"
                            },
                            "Sydney": {
                                "exemplarCity": "Sydney"
                            }
                        },
                        "Pacific": {
                            "Apia": {
                                "exemplarCity": "Apia"
                            },
                            "Auckland": {
                                "exemplarCity": "Auckland"
                            },
                            "Bougainville": {
                                "exemplarCity": "Bougainville"
                            },
                            "Chatham": {
                                "exemplarCity": "Chatham"
                            },
                            "Easter": {
                                "exemplarCity": "Île de Pâques"
                            },
                            "Efate": {
                                "exemplarCity": "Éfaté"
                            },
                            "Enderbury": {
                                "exemplarCity": "Enderbury"
                            },
                            "Fakaofo": {
                                "exemplarCity": "Fakaofo"
                            },
                            "Fiji": {
                                "exemplarCity": "Fidji"
                            },
                            "Funafuti": {
                                "exemplarCity": "Funafuti"
                            },
                            "Galapagos": {
                                "exemplarCity": "Galápagos"
                            },
                            "Gambier": {
                                "exemplarCity": "Gambier"
                            },
                            "Guadalcanal": {
                                "exemplarCity": "Guadalcanal"
                            },
                            "Guam": {
                                "exemplarCity": "Guam"
                            },
                            "Honolulu": {
                                "exemplarCity": "Honolulu"
                            },
                            "Johnston": {
                                "exemplarCity": "Johnston"
                            },
                            "Kiritimati": {
                                "exemplarCity": "Kiritimati"
                            },
                            "Kosrae": {
                                "exemplarCity": "Kosrae"
                            },
                            "Kwajalein": {
                                "exemplarCity": "Kwajalein"
                            },
                            "Majuro": {
                                "exemplarCity": "Majuro"
                            },
                            "Marquesas": {
                                "exemplarCity": "Marquises"
                            },
                            "Midway": {
                                "exemplarCity": "Midway"
                            },
                            "Nauru": {
                                "exemplarCity": "Nauru"
                            },
                            "Niue": {
                                "exemplarCity": "Niue"
                            },
                            "Norfolk": {
                                "exemplarCity": "Norfolk"
                            },
                            "Noumea": {
                                "exemplarCity": "Nouméa"
                            },
                            "Pago_Pago": {
                                "exemplarCity": "Pago Pago"
                            },
                            "Palau": {
                                "exemplarCity": "Palau"
                            },
                            "Pitcairn": {
                                "exemplarCity": "Pitcairn"
                            },
                            "Ponape": {
                                "exemplarCity": "Pohnpei"
                            },
                            "Port_Moresby": {
                                "exemplarCity": "Port Moresby"
                            },
                            "Rarotonga": {
                                "exemplarCity": "Rarotonga"
                            },
                            "Saipan": {
                                "exemplarCity": "Saipan"
                            },
                            "Tahiti": {
                                "exemplarCity": "Tahiti"
                            },
                            "Tarawa": {
                                "exemplarCity": "Tarawa"
                            },
                            "Tongatapu": {
                                "exemplarCity": "Tongatapu"
                            },
                            "Truk": {
                                "exemplarCity": "Chuuk"
                            },
                            "Wake": {
                                "exemplarCity": "Wake"
                            },
                            "Wallis": {
                                "exemplarCity": "Wallis"
                            }
                        },
                        "Arctic": {
                            "Longyearbyen": {
                                "exemplarCity": "Longyearbyen"
                            }
                        },
                        "Antarctica": {
                            "Casey": {
                                "exemplarCity": "Casey"
                            },
                            "Davis": {
                                "exemplarCity": "Davis"
                            },
                            "DumontDUrville": {
                                "exemplarCity": "Dumont d’Urville"
                            },
                            "Macquarie": {
                                "exemplarCity": "Macquarie"
                            },
                            "Mawson": {
                                "exemplarCity": "Mawson"
                            },
                            "McMurdo": {
                                "exemplarCity": "McMurdo"
                            },
                            "Palmer": {
                                "exemplarCity": "Palmer"
                            },
                            "Rothera": {
                                "exemplarCity": "Rothera"
                            },
                            "Syowa": {
                                "exemplarCity": "Showa"
                            },
                            "Troll": {
                                "exemplarCity": "Troll"
                            },
                            "Vostok": {
                                "exemplarCity": "Vostok"
                            }
                        },
                        "Etc": {
                            "UTC": {
                                "long": {
                                    "standard": "Temps universel coordonné"
                                },
                                "short": {
                                    "standard": "UTC"
                                }
                            },
                            "Unknown": {
                                "exemplarCity": "ville inconnue"
                            }
                        }
                    },
                    "metazone": {
                        "Acre": {
                            "long": {
                                "generic": "heure de l’Acre",
                                "standard": "heure normale de l’Acre",
                                "daylight": "heure d’été de l’Acre"
                            }
                        },
                        "Afghanistan": {
                            "long": {
                                "standard": "heure de l’Afghanistan"
                            }
                        },
                        "Africa_Central": {
                            "long": {
                                "standard": "heure normale d’Afrique centrale"
                            }
                        },
                        "Africa_Eastern": {
                            "long": {
                                "standard": "heure normale d’Afrique de l’Est"
                            }
                        },
                        "Africa_Southern": {
                            "long": {
                                "standard": "heure normale d’Afrique méridionale"
                            }
                        },
                        "Africa_Western": {
                            "long": {
                                "generic": "heure d’Afrique de l’Ouest",
                                "standard": "heure normale d’Afrique de l’Ouest",
                                "daylight": "heure d’été d’Afrique de l’Ouest"
                            }
                        },
                        "Alaska": {
                            "long": {
                                "generic": "heure de l’Alaska",
                                "standard": "heure normale de l’Alaska",
                                "daylight": "heure d’été de l’Alaska"
                            }
                        },
                        "Almaty": {
                            "long": {
                                "generic": "heure d’Alma Ata",
                                "standard": "heure normale d’Alma Ata",
                                "daylight": "heure d’été d’Alma Ata"
                            }
                        },
                        "Amazon": {
                            "long": {
                                "generic": "heure de l’Amazonie",
                                "standard": "heure normale de l’Amazonie",
                                "daylight": "heure d’été de l’Amazonie"
                            }
                        },
                        "America_Central": {
                            "long": {
                                "generic": "heure du centre nord-américain",
                                "standard": "heure normale du centre nord-américain",
                                "daylight": "heure d’été du Centre"
                            }
                        },
                        "America_Eastern": {
                            "long": {
                                "generic": "heure de l’Est nord-américain",
                                "standard": "heure normale de l’Est nord-américain",
                                "daylight": "heure d’été de l’Est"
                            }
                        },
                        "America_Mountain": {
                            "long": {
                                "generic": "heure des Rocheuses",
                                "standard": "heure normale des Rocheuses",
                                "daylight": "heure d’été des Rocheuses"
                            }
                        },
                        "America_Pacific": {
                            "long": {
                                "generic": "heure du Pacifique nord-américain",
                                "standard": "heure normale du Pacifique nord-américain",
                                "daylight": "heure d’été du Pacifique"
                            }
                        },
                        "Anadyr": {
                            "long": {
                                "generic": "heure d’Anadyr",
                                "standard": "heure normale d’Anadyr",
                                "daylight": "heure d’été d’Anadyr"
                            }
                        },
                        "Apia": {
                            "long": {
                                "generic": "heure d’Apia",
                                "standard": "heure normale d’Apia",
                                "daylight": "heure d’été d’Apia"
                            }
                        },
                        "Aqtau": {
                            "long": {
                                "generic": "heure d’Aktaou",
                                "standard": "heure normale d’Aktaou",
                                "daylight": "heure d’été d’Aktaou"
                            }
                        },
                        "Aqtobe": {
                            "long": {
                                "generic": "heure d’Aqtöbe",
                                "standard": "heure normale d’Aqtöbe",
                                "daylight": "heure d’été d’Aqtöbe"
                            }
                        },
                        "Arabian": {
                            "long": {
                                "generic": "heure de l’Arabie",
                                "standard": "heure normale de l’Arabie",
                                "daylight": "heure d’été de l’Arabie"
                            }
                        },
                        "Argentina": {
                            "long": {
                                "generic": "heure de l’Argentine",
                                "standard": "heure normale d’Argentine",
                                "daylight": "heure d’été de l’Argentine"
                            }
                        },
                        "Argentina_Western": {
                            "long": {
                                "generic": "heure de l’Ouest argentin",
                                "standard": "heure normale de l’Ouest argentin",
                                "daylight": "heure d’été de l’Ouest argentin"
                            }
                        },
                        "Armenia": {
                            "long": {
                                "generic": "heure de l’Arménie",
                                "standard": "heure normale de l’Arménie",
                                "daylight": "heure d’été d’Arménie"
                            }
                        },
                        "Atlantic": {
                            "long": {
                                "generic": "heure de l’Atlantique",
                                "standard": "heure normale de l’Atlantique",
                                "daylight": "heure d’été de l’Atlantique"
                            }
                        },
                        "Australia_Central": {
                            "long": {
                                "generic": "heure du centre de l’Australie",
                                "standard": "heure normale du centre de l’Australie",
                                "daylight": "heure d’été du centre de l’Australie"
                            }
                        },
                        "Australia_CentralWestern": {
                            "long": {
                                "generic": "heure du centre-ouest de l’Australie",
                                "standard": "heure normale du centre-ouest de l’Australie",
                                "daylight": "heure d’été du centre-ouest de l’Australie"
                            }
                        },
                        "Australia_Eastern": {
                            "long": {
                                "generic": "heure de l’Est de l’Australie",
                                "standard": "heure normale de l’Est de l’Australie",
                                "daylight": "heure d’été de l’Est de l’Australie"
                            }
                        },
                        "Australia_Western": {
                            "long": {
                                "generic": "heure de l’Ouest de l’Australie",
                                "standard": "heure normale de l’Ouest de l’Australie",
                                "daylight": "heure d’été de l’Ouest de l’Australie"
                            }
                        },
                        "Azerbaijan": {
                            "long": {
                                "generic": "heure de l’Azerbaïdjan",
                                "standard": "heure normale de l’Azerbaïdjan",
                                "daylight": "heure d’été d’Azerbaïdjan"
                            }
                        },
                        "Azores": {
                            "long": {
                                "generic": "heure des Açores",
                                "standard": "heure normale des Açores",
                                "daylight": "heure d’été des Açores"
                            }
                        },
                        "Bangladesh": {
                            "long": {
                                "generic": "heure du Bangladesh",
                                "standard": "heure normale du Bangladesh",
                                "daylight": "heure d’été du Bangladesh"
                            }
                        },
                        "Bhutan": {
                            "long": {
                                "standard": "heure du Bhoutan"
                            }
                        },
                        "Bolivia": {
                            "long": {
                                "standard": "heure de Bolivie"
                            }
                        },
                        "Brasilia": {
                            "long": {
                                "generic": "heure de Brasilia",
                                "standard": "heure normale de Brasilia",
                                "daylight": "heure d’été de Brasilia"
                            }
                        },
                        "Brunei": {
                            "long": {
                                "standard": "heure du Brunéi"
                            }
                        },
                        "Cape_Verde": {
                            "long": {
                                "generic": "heure du Cap-Vert",
                                "standard": "heure normale du Cap-Vert",
                                "daylight": "heure d’été du Cap-Vert"
                            }
                        },
                        "Chamorro": {
                            "long": {
                                "standard": "heure des Chamorro"
                            }
                        },
                        "Chatham": {
                            "long": {
                                "generic": "heure des îles Chatham",
                                "standard": "heure normale des îles Chatham",
                                "daylight": "heure d’été des îles Chatham"
                            }
                        },
                        "Chile": {
                            "long": {
                                "generic": "heure du Chili",
                                "standard": "heure normale du Chili",
                                "daylight": "heure d’été du Chili"
                            }
                        },
                        "China": {
                            "long": {
                                "generic": "heure de la Chine",
                                "standard": "heure normale de la Chine",
                                "daylight": "heure d’été de Chine"
                            }
                        },
                        "Choibalsan": {
                            "long": {
                                "generic": "heure de Choibalsan",
                                "standard": "heure normale de Choibalsan",
                                "daylight": "heure d’été de Choibalsan"
                            }
                        },
                        "Christmas": {
                            "long": {
                                "standard": "heure de l’île Christmas"
                            }
                        },
                        "Cocos": {
                            "long": {
                                "standard": "heure des îles Cocos"
                            }
                        },
                        "Colombia": {
                            "long": {
                                "generic": "heure de Colombie",
                                "standard": "heure normale de Colombie",
                                "daylight": "heure d’été de Colombie"
                            }
                        },
                        "Cook": {
                            "long": {
                                "generic": "heure des îles Cook",
                                "standard": "heure normale des îles Cook",
                                "daylight": "heure d’été des îles Cook"
                            }
                        },
                        "Cuba": {
                            "long": {
                                "generic": "heure de Cuba",
                                "standard": "heure normale de Cuba",
                                "daylight": "heure d’été de Cuba"
                            }
                        },
                        "Davis": {
                            "long": {
                                "standard": "heure de Davis"
                            }
                        },
                        "DumontDUrville": {
                            "long": {
                                "standard": "heure de Dumont-d’Urville"
                            }
                        },
                        "East_Timor": {
                            "long": {
                                "standard": "heure du Timor oriental"
                            }
                        },
                        "Easter": {
                            "long": {
                                "generic": "heure de l’île de Pâques",
                                "standard": "heure normale de l’île de Pâques",
                                "daylight": "heure d’été de l’île de Pâques"
                            }
                        },
                        "Ecuador": {
                            "long": {
                                "standard": "heure de l’Équateur"
                            }
                        },
                        "Europe_Central": {
                            "long": {
                                "generic": "heure d’Europe centrale",
                                "standard": "heure normale d’Europe centrale",
                                "daylight": "heure d’été d’Europe centrale"
                            }
                        },
                        "Europe_Eastern": {
                            "long": {
                                "generic": "heure d’Europe de l’Est",
                                "standard": "heure normale d’Europe de l’Est",
                                "daylight": "heure d’été d’Europe de l’Est"
                            }
                        },
                        "Europe_Further_Eastern": {
                            "long": {
                                "standard": "heure de Kaliningrad"
                            }
                        },
                        "Europe_Western": {
                            "long": {
                                "generic": "heure d’Europe de l’Ouest",
                                "standard": "heure normale d’Europe de l’Ouest",
                                "daylight": "heure d’été d’Europe de l’Ouest"
                            }
                        },
                        "Falkland": {
                            "long": {
                                "generic": "heure des îles Malouines",
                                "standard": "heure normale des îles Malouines",
                                "daylight": "heure d’été des îles Malouines"
                            }
                        },
                        "Fiji": {
                            "long": {
                                "generic": "heure des îles Fidji",
                                "standard": "heure normale des îles Fidji",
                                "daylight": "heure d’été des îles Fidji"
                            }
                        },
                        "French_Guiana": {
                            "long": {
                                "standard": "heure de la Guyane française"
                            }
                        },
                        "French_Southern": {
                            "long": {
                                "standard": "heure des Terres australes et antarctiques françaises"
                            }
                        },
                        "Galapagos": {
                            "long": {
                                "standard": "heure des îles Galápagos"
                            }
                        },
                        "Gambier": {
                            "long": {
                                "standard": "heure des îles Gambier"
                            }
                        },
                        "Georgia": {
                            "long": {
                                "generic": "heure de la Géorgie",
                                "standard": "heure normale de la Géorgie",
                                "daylight": "heure d’été de Géorgie"
                            }
                        },
                        "Gilbert_Islands": {
                            "long": {
                                "standard": "heure des îles Gilbert"
                            }
                        },
                        "GMT": {
                            "long": {
                                "standard": "heure moyenne de Greenwich"
                            }
                        },
                        "Greenland_Eastern": {
                            "long": {
                                "generic": "heure de l’Est du Groenland",
                                "standard": "heure normale de l’Est du Groenland",
                                "daylight": "heure d’été de l’Est du Groenland"
                            }
                        },
                        "Greenland_Western": {
                            "long": {
                                "generic": "heure de l’Ouest du Groenland",
                                "standard": "heure normale de l’Ouest du Groenland",
                                "daylight": "heure d’été de l’Ouest du Groenland"
                            }
                        },
                        "Guam": {
                            "long": {
                                "standard": "heure de Guam"
                            }
                        },
                        "Gulf": {
                            "long": {
                                "standard": "heure du Golfe"
                            }
                        },
                        "Guyana": {
                            "long": {
                                "standard": "heure du Guyana"
                            }
                        },
                        "Hawaii_Aleutian": {
                            "long": {
                                "generic": "heure d’Hawaii - Aléoutiennes",
                                "standard": "heure normale d’Hawaii - Aléoutiennes",
                                "daylight": "heure d’été d’Hawaii - Aléoutiennes"
                            }
                        },
                        "Hong_Kong": {
                            "long": {
                                "generic": "heure de Hong Kong",
                                "standard": "heure normale de Hong Kong",
                                "daylight": "heure d’été de Hong Kong"
                            }
                        },
                        "Hovd": {
                            "long": {
                                "generic": "heure de Hovd",
                                "standard": "heure normale de Hovd",
                                "daylight": "heure d’été de Hovd"
                            }
                        },
                        "India": {
                            "long": {
                                "standard": "heure de l’Inde"
                            }
                        },
                        "Indian_Ocean": {
                            "long": {
                                "standard": "heure de l’Océan Indien"
                            }
                        },
                        "Indochina": {
                            "long": {
                                "standard": "heure d’Indochine"
                            }
                        },
                        "Indonesia_Central": {
                            "long": {
                                "standard": "heure du Centre indonésien"
                            }
                        },
                        "Indonesia_Eastern": {
                            "long": {
                                "standard": "heure de l’Est indonésien"
                            }
                        },
                        "Indonesia_Western": {
                            "long": {
                                "standard": "heure de l’Ouest indonésien"
                            }
                        },
                        "Iran": {
                            "long": {
                                "generic": "heure de l’Iran",
                                "standard": "heure normale d’Iran",
                                "daylight": "heure d’été d’Iran"
                            }
                        },
                        "Irkutsk": {
                            "long": {
                                "generic": "heure d’Irkoutsk",
                                "standard": "heure normale d’Irkoutsk",
                                "daylight": "heure d’été d’Irkoutsk"
                            }
                        },
                        "Israel": {
                            "long": {
                                "generic": "heure d’Israël",
                                "standard": "heure normale d’Israël",
                                "daylight": "heure d’été d’Israël"
                            }
                        },
                        "Japan": {
                            "long": {
                                "generic": "heure du Japon",
                                "standard": "heure normale du Japon",
                                "daylight": "heure d’été du Japon"
                            }
                        },
                        "Kamchatka": {
                            "long": {
                                "generic": "heure de Petropavlovsk-Kamchatski",
                                "standard": "heure normale de Petropavlovsk-Kamchatski",
                                "daylight": "heure d’été de Petropavlovsk-Kamchatski"
                            }
                        },
                        "Kazakhstan_Eastern": {
                            "long": {
                                "standard": "heure de l’Est du Kazakhstan"
                            }
                        },
                        "Kazakhstan_Western": {
                            "long": {
                                "standard": "heure de l’Ouest du Kazakhstan"
                            }
                        },
                        "Korea": {
                            "long": {
                                "generic": "heure de la Corée",
                                "standard": "heure normale de la Corée",
                                "daylight": "heure d’été de Corée"
                            }
                        },
                        "Kosrae": {
                            "long": {
                                "standard": "heure de Kosrae"
                            }
                        },
                        "Krasnoyarsk": {
                            "long": {
                                "generic": "heure de Krasnoïarsk",
                                "standard": "heure normale de Krasnoïarsk",
                                "daylight": "heure d’été de Krasnoïarsk"
                            }
                        },
                        "Kyrgystan": {
                            "long": {
                                "standard": "heure du Kirghizistan"
                            }
                        },
                        "Line_Islands": {
                            "long": {
                                "standard": "heure des îles de la Ligne"
                            }
                        },
                        "Lord_Howe": {
                            "long": {
                                "generic": "heure de Lord Howe",
                                "standard": "heure normale de Lord Howe",
                                "daylight": "heure d’été de Lord Howe"
                            }
                        },
                        "Macquarie": {
                            "long": {
                                "standard": "heure de l’île Macquarie"
                            }
                        },
                        "Magadan": {
                            "long": {
                                "generic": "heure de Magadan",
                                "standard": "heure normale de Magadan",
                                "daylight": "heure d’été de Magadan"
                            }
                        },
                        "Malaysia": {
                            "long": {
                                "standard": "heure de la Malaisie"
                            }
                        },
                        "Maldives": {
                            "long": {
                                "standard": "heure des Maldives"
                            }
                        },
                        "Marquesas": {
                            "long": {
                                "standard": "heure des îles Marquises"
                            }
                        },
                        "Marshall_Islands": {
                            "long": {
                                "standard": "heure des îles Marshall"
                            }
                        },
                        "Mauritius": {
                            "long": {
                                "generic": "heure de Maurice",
                                "standard": "heure normale de Maurice",
                                "daylight": "heure d’été de Maurice"
                            }
                        },
                        "Mawson": {
                            "long": {
                                "standard": "heure de Mawson"
                            }
                        },
                        "Mexico_Northwest": {
                            "long": {
                                "generic": "heure du Nord-Ouest du Mexique",
                                "standard": "heure normale du Nord-Ouest du Mexique",
                                "daylight": "heure d’été du Nord-Ouest du Mexique"
                            }
                        },
                        "Mexico_Pacific": {
                            "long": {
                                "generic": "heure du Pacifique mexicain",
                                "standard": "heure normale du Pacifique mexicain",
                                "daylight": "heure d’été du Pacifique mexicain"
                            }
                        },
                        "Mongolia": {
                            "long": {
                                "generic": "heure d’Oulan-Bator",
                                "standard": "heure normale d’Oulan-Bator",
                                "daylight": "heure d’été d’Oulan-Bator"
                            }
                        },
                        "Moscow": {
                            "long": {
                                "generic": "heure de Moscou",
                                "standard": "heure normale de Moscou",
                                "daylight": "heure d’été de Moscou"
                            }
                        },
                        "Myanmar": {
                            "long": {
                                "standard": "heure du Myanmar"
                            }
                        },
                        "Nauru": {
                            "long": {
                                "standard": "heure de Nauru"
                            }
                        },
                        "Nepal": {
                            "long": {
                                "standard": "heure du Népal"
                            }
                        },
                        "New_Caledonia": {
                            "long": {
                                "generic": "heure de la Nouvelle-Calédonie",
                                "standard": "heure normale de la Nouvelle-Calédonie",
                                "daylight": "heure d’été de Nouvelle-Calédonie"
                            }
                        },
                        "New_Zealand": {
                            "long": {
                                "generic": "heure de la Nouvelle-Zélande",
                                "standard": "heure normale de la Nouvelle-Zélande",
                                "daylight": "heure d’été de la Nouvelle-Zélande"
                            }
                        },
                        "Newfoundland": {
                            "long": {
                                "generic": "heure de Terre-Neuve",
                                "standard": "heure normale de Terre-Neuve",
                                "daylight": "heure d’été de Terre-Neuve"
                            }
                        },
                        "Niue": {
                            "long": {
                                "standard": "heure de Nioué"
                            }
                        },
                        "Norfolk": {
                            "long": {
                                "standard": "heure de l’île Norfolk"
                            }
                        },
                        "Noronha": {
                            "long": {
                                "generic": "heure de Fernando de Noronha",
                                "standard": "heure normale de Fernando de Noronha",
                                "daylight": "heure d’été de Fernando de Noronha"
                            }
                        },
                        "North_Mariana": {
                            "long": {
                                "standard": "heure des îles Mariannes du Nord"
                            }
                        },
                        "Novosibirsk": {
                            "long": {
                                "generic": "heure de Novossibirsk",
                                "standard": "heure normale de Novossibirsk",
                                "daylight": "heure d’été de Novossibirsk"
                            }
                        },
                        "Omsk": {
                            "long": {
                                "generic": "heure de Omsk",
                                "standard": "heure normale de Omsk",
                                "daylight": "heure d’été de Omsk"
                            }
                        },
                        "Pakistan": {
                            "long": {
                                "generic": "heure du Pakistan",
                                "standard": "heure normale du Pakistan",
                                "daylight": "heure d’été du Pakistan"
                            }
                        },
                        "Palau": {
                            "long": {
                                "standard": "heure des Palaos"
                            }
                        },
                        "Papua_New_Guinea": {
                            "long": {
                                "standard": "heure de la Papouasie-Nouvelle-Guinée"
                            }
                        },
                        "Paraguay": {
                            "long": {
                                "generic": "heure du Paraguay",
                                "standard": "heure normale du Paraguay",
                                "daylight": "heure d’été du Paraguay"
                            }
                        },
                        "Peru": {
                            "long": {
                                "generic": "heure du Pérou",
                                "standard": "heure normale du Pérou",
                                "daylight": "heure d’été du Pérou"
                            }
                        },
                        "Philippines": {
                            "long": {
                                "generic": "heure des Philippines",
                                "standard": "heure normale des Philippines",
                                "daylight": "heure d’été des Philippines"
                            }
                        },
                        "Phoenix_Islands": {
                            "long": {
                                "standard": "heure des îles Phoenix"
                            }
                        },
                        "Pierre_Miquelon": {
                            "long": {
                                "generic": "heure de Saint-Pierre-et-Miquelon",
                                "standard": "heure normale de Saint-Pierre-et-Miquelon",
                                "daylight": "heure d’été de Saint-Pierre-et-Miquelon"
                            }
                        },
                        "Pitcairn": {
                            "long": {
                                "standard": "heure des îles Pitcairn"
                            }
                        },
                        "Ponape": {
                            "long": {
                                "standard": "heure de l’île de Pohnpei"
                            }
                        },
                        "Pyongyang": {
                            "long": {
                                "standard": "heure de Pyongyang"
                            }
                        },
                        "Reunion": {
                            "long": {
                                "standard": "heure de La Réunion"
                            }
                        },
                        "Rothera": {
                            "long": {
                                "standard": "heure de Rothera"
                            }
                        },
                        "Sakhalin": {
                            "long": {
                                "generic": "heure de Sakhaline",
                                "standard": "heure normale de Sakhaline",
                                "daylight": "heure d’été de Sakhaline"
                            }
                        },
                        "Samara": {
                            "long": {
                                "generic": "heure de Samara",
                                "standard": "heure normale de Samara",
                                "daylight": "heure d’été de Samara"
                            }
                        },
                        "Samoa": {
                            "long": {
                                "generic": "heure des Samoa",
                                "standard": "heure normale des Samoa",
                                "daylight": "heure d’été des Samoa"
                            }
                        },
                        "Seychelles": {
                            "long": {
                                "standard": "heure des Seychelles"
                            }
                        },
                        "Singapore": {
                            "long": {
                                "standard": "heure de Singapour"
                            }
                        },
                        "Solomon": {
                            "long": {
                                "standard": "heure des îles Salomon"
                            }
                        },
                        "South_Georgia": {
                            "long": {
                                "standard": "heure de Géorgie du Sud"
                            }
                        },
                        "Suriname": {
                            "long": {
                                "standard": "heure du Suriname"
                            }
                        },
                        "Syowa": {
                            "long": {
                                "standard": "heure de Syowa"
                            }
                        },
                        "Tahiti": {
                            "long": {
                                "standard": "heure de Tahiti"
                            }
                        },
                        "Taipei": {
                            "long": {
                                "generic": "heure de Taipei",
                                "standard": "heure normale de Taipei",
                                "daylight": "heure d’été de Taipei"
                            }
                        },
                        "Tajikistan": {
                            "long": {
                                "standard": "heure du Tadjikistan"
                            }
                        },
                        "Tokelau": {
                            "long": {
                                "standard": "heure de Tokelau"
                            }
                        },
                        "Tonga": {
                            "long": {
                                "generic": "heure des Tonga",
                                "standard": "heure normale des Tonga",
                                "daylight": "heure d’été de Tonga"
                            }
                        },
                        "Truk": {
                            "long": {
                                "standard": "heure de Chuuk"
                            }
                        },
                        "Turkmenistan": {
                            "long": {
                                "generic": "heure du Turkménistan",
                                "standard": "heure normale du Turkménistan",
                                "daylight": "heure d’été du Turkménistan"
                            }
                        },
                        "Tuvalu": {
                            "long": {
                                "standard": "heure des Tuvalu"
                            }
                        },
                        "Uruguay": {
                            "long": {
                                "generic": "heure de l’Uruguay",
                                "standard": "heure normale de l’Uruguay",
                                "daylight": "heure d’été de l’Uruguay"
                            }
                        },
                        "Uzbekistan": {
                            "long": {
                                "generic": "heure de l’Ouzbékistan",
                                "standard": "heure normale de l’Ouzbékistan",
                                "daylight": "heure d’été de l’Ouzbékistan"
                            }
                        },
                        "Vanuatu": {
                            "long": {
                                "generic": "heure du Vanuatu",
                                "standard": "heure normale du Vanuatu",
                                "daylight": "heure d’été de Vanuatu"
                            }
                        },
                        "Venezuela": {
                            "long": {
                                "standard": "heure du Venezuela"
                            }
                        },
                        "Vladivostok": {
                            "long": {
                                "generic": "heure de Vladivostok",
                                "standard": "heure normale de Vladivostok",
                                "daylight": "heure d’été de Vladivostok"
                            }
                        },
                        "Volgograd": {
                            "long": {
                                "generic": "heure de Volgograd",
                                "standard": "heure normale de Volgograd",
                                "daylight": "heure d’été de Volgograd"
                            }
                        },
                        "Vostok": {
                            "long": {
                                "standard": "heure de Vostok"
                            }
                        },
                        "Wake": {
                            "long": {
                                "standard": "heure de l’île Wake"
                            }
                        },
                        "Wallis": {
                            "long": {
                                "standard": "heure de Wallis-et-Futuna"
                            }
                        },
                        "Yakutsk": {
                            "long": {
                                "generic": "heure de Iakoutsk",
                                "standard": "heure normale de Iakoutsk",
                                "daylight": "heure d’été de Iakoutsk"
                            }
                        },
                        "Yekaterinburg": {
                            "long": {
                                "generic": "heure d’Ekaterinbourg",
                                "standard": "heure normale d’Ekaterinbourg",
                                "daylight": "heure d’été d’Ekaterinbourg"
                            }
                        }
                    }
                }
            }
        }
    }
}
// It loads the specified CLDR JSON data containing the format and timezone information for gregorian calendar and numbers
ej.base.loadCldr(gregorianFormat, numberFormat, timeZone);