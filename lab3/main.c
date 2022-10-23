#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int my_printf(char *format_string, char *param) {
  for (int i = 0; i < strlen(format_string); i++) {
    if ((format_string[i] == '#') && (format_string[i + 1] == 'k')) {
      i++;

      for (int j = 0; j < strlen(param); j++) {
        char letter = param[j];

        if (letter > 65 && letter < 90) {
          letter = letter + 32;
        } else if (letter > 97 && letter < 122) {
          letter = letter - 32;
        }

        putchar(letter);
      }
    } else if ((format_string[i] == '#') && (format_string[i + 1] == '.')) {
      i += 2;
      char tab_with_number[8];
      for (int j = 0; j < strlen(tab_with_number); j++) {
        tab_with_number[j] = "";
      }

      int counter = 0;
      for (int j = 0; j < strlen(tab_with_number); j++) {
        if (format_string[i + j] == 'k') {
          break;
        }

        if (format_string[i + j] >= '0' && format_string[i + j] <= '9') {
          tab_with_number[j] = format_string[i + j];
          counter++;
        }
      }
      i += counter;

      int number_from_string = atoi(tab_with_number);
      int number_of_letter_to_display;

      if (number_from_string > strlen(param)) {
        number_of_letter_to_display = strlen(param);
      } else {
        number_of_letter_to_display = number_from_string;
      }

      for (int j = 0; j < number_of_letter_to_display; j++) {
        char letter = param[j];

        if (letter > 65 && letter < 90) {
          letter = letter + 32;
        } else if (letter > 97 && letter < 122) {
          letter = letter - 32;
        }

        putchar(letter);
      }
    } else if((format_string[i] == '#') && (format_string[i + 1] >= '0') && (format_string[i + 1] <= '9')) {
      i++;
      char tab_with_number[8];
      for (int j = 0; j < strlen(tab_with_number); j++) {
        tab_with_number[j] = "";
      }

      int counter = 0;
      for (int j = 0; j < strlen(tab_with_number); j++) {
        if (format_string[i + j] == 'k') {
          break;
        }

        if (format_string[i + j] >= '0' && format_string[i + j] <= '9') {
          tab_with_number[j] = format_string[i + j];
          counter++;
        }
      }
      i += counter;

      int number_of_space = atoi(tab_with_number);
      if(number_of_space == 1) {
        number_of_space = 0;
      }
      
      for(int i = 0; i< number_of_space; i++) {
        putchar(32);
      }

      for (int j = 0; j < strlen(param); j++) {
        char letter = param[j];
  
        if (letter > 65 && letter < 90) {
          letter = letter + 32;
        } else if (letter > 97 && letter < 122) {
          letter = letter - 32;
        }

        putchar(letter);
      }
      
    } else {
      putchar(format_string[i]);
    }
  }
  puts("");
}


int main(int argc, char *argv[]) {
  char buf[1024], buf2[1024];

  while (gets(buf)) {
    gets(buf2);
    my_printf(buf, buf2);
  }

  return 0;
}
