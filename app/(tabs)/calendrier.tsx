import React, { useState, useEffect } from 'react';
import { Text, View, Image, SafeAreaView } from "react-native";
import { useColorScheme } from '@/hooks/useColorScheme';
import { LocaleConfig, Calendar, Agenda, AgendaEntry } from 'react-native-calendars';
import { Colors } from '../../constants/Colors';
import Events from '../assets/data/dates.json'

LocaleConfig.locales['fr'] = {
    monthNames: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre'
    ],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    today: "Aujourd'hui"
  };
  LocaleConfig.defaultLocale = 'fr';

  interface EventInterface {
    name: string,
    height?: string,
    description: string
  }

  interface EventListInterface {
    [key: string]: EventInterface[]
  }




export default function Futur() {
    const [events, setEvents] = useState({});
    const [currentDay, setCurrentDay] = useState<string>('');

    const colorScheme = useColorScheme();
    const colorsPage = Colors[colorScheme==='light' ? 'light':'dark'];

    function getTodayDate() {
        const today = new Date();
        let monthString;
        let dayString;

        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        if (month < 10) {
            monthString = '0' + month;
        } else {
            monthString = month;
        }
        let day = today.getDate();
        console.log(day)
        if (day < 10) {
            dayString = '0' + day;
        } else {
            dayString = day;
        }
        setCurrentDay(year + '/' + monthString + '/' + dayString);
    }


    useEffect(() => {
        getTodayDate();
        loadEvents();
        handleEmptyDates();
    }, [])
    
    //load events from json and fill it in the object to fill in the agenda
    function loadEvents() {
        const eventsTab: EventListInterface = {};

        Events.events.forEach(item => {
            eventsTab[item.date] = [{ name: item.game, description: item.description }]
        })
        setEvents(eventsTab);
    }



    //fill empty dates of the week with empty events to prevent infinite loading
    function handleEmptyDates() {
      const today = new Date();
      let day = new Date();

      console.log('///////////');
      
      //on remonte jusqu'au dimanche précédent
      for (let i = 1; i <= today.getDay(); i++) {
        day.setDate(today.getDate() - i);
      }

      //On passe sur chaque jour de la semaine pour créer un événement
      for (let i = 0; i < 7; i++) {
        day.setDate(day.getDate() + 1);
        console.log(day);
      }
    }




    const renderEmptyDate = () => {
        return (
          <View>
            <Text>This is empty date!</Text>
          </View>
        );
      };

    //how to render events when day is selected
    const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
        const fontSize = isFirst ? 16 : 14;
    
        return (
          <View>
            <Text style={{fontSize}}>{reservation.name}</Text>
            <Text>{reservation.description}</Text>
          </View>
        );
      };

      const rowHasChanged= (r1, r2) => {
        return r1.text !== r2.text;
      }

    return(
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colorsPage.background,
        }}>
            <Agenda 
                style={{backgroundColor: colorsPage.background, width: '100%'}}
                items={events}
                selected={currentDay}
                renderItem={renderItem}
                renderEmptyDate={renderEmptyDate}
                hideKnob={true}
            />
        </SafeAreaView>
    )
}