# Zadanie 3
Zadanie polega na 'ożywieniu' aplikacji poprzez dodanie pobierania danych z publicznego API oraz dodanie funkcjonalności wyszukiwania i filtrowania. 

W folderze `task-3` finalnie mają się znaleźć pliki aplikacji `Vue` spełniającej wszystkie wymagania.


#### Wymagania
- Widok po załadowaniu pobiera dane z [endpointu](http://hp-api.herokuapp.com/api/characters)
- Dane prezentowane są po pobraniu w widoku jako kafelki postaci
- Postaci wyświetlane są **zawsze** w kolejności alfabetycznej (według imion)
- Jeżeli jakaś postać nie posiada zdjęcia, to w miejscu zdjęcia powinna zostać wyświetlona grafika zastępcza (przygotowana przez Ciebie)
- Ponad wynikami wyszukiwania a bieżąco aktualizuje się liczba wyświetlanych kafelków
- Istnieje możliwość zastosowania filtru na rodzaj postaci (wszystkie postaci / tylko uczniowie / tylko kadra nauczycielska) - w przypadku wyboru powinny wyświetlać się tylko te postaci, które spełniają wymagania (według pól `hogwartsStudent` i `hogwartsStaff`)
- Istnieje możliwość zastosowania filtru na dom postaci (wszystkie domy / Gryffindor / Slytherin / Ravenclaw / Slytherin) - w przypadku wyboru wyświetlają się tylko postaci z danego domu
- Istnieje możliwość wyszukania postaci po fragmencie jej imienia (należy podać min. 3 znaki)
- Filtry i wyszukiwanie działają łącznie (czyli aktywując kilka na raz otrzymujemy wynik na zasadzie łączenia ich zasadą `AND`)

#### Sposób sprawdzania
Efekt pracy zostanie sprawdzony na przeglądarce Google chrome w aktualnej wersji. Sprawdzana będzie jakość kodu oraz zastosowane rozwiązania programistyczne. Dodatkowe punkty można uzyskać, jeżeli filtry i wyszukiwanie będą aplikowane 'na żywo' przy każdej zmianie, bez konieczności używania przycisku z lupką. Dodatkowe punkty można również uzyskać implementując `localStorage` lub `sessionStorage` w celu przechowywania wartości aktualnie zastosowanych filtrów i wyszukiwania, aby po odświeżeniu strony mogły zostać one na start wczytane i ustawione. 