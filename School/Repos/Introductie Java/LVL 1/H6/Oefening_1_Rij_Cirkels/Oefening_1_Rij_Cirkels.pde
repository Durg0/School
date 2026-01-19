size(700, 700);
int grootte = 40;
int ruimte = 60;

int y = height / 2;
for (int i = 0; i < 10; i++) {
  int x = (width - (9 * ruimte)) / 2 + i * ruimte;
  ellipse(x, y, grootte, grootte);
}
