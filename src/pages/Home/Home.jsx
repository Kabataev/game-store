import GameItem from "../../components/GameItem/GameItem";
import "./home.scss";

const GAMES = [
  {
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/capsule_616x353.jpg?t=1683059745",
    title: "Forza Horizon 5",
    genres: ["Гонки", "Симулятор", "Открытый мир"],
    price: 2343,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQWFhYYGBYYGRgYGRkcGRwZGRgYGBkZFhkcHyoiGRwnHRkZIzQkKCsuMTExGSE2OzYwOiowMS4BCwsLDw4PHRERHTAnIScwMC4yMDAwMDAwMjAwMDM4MDIwMjAwMDAwMDAwMDAwMDMwMDAyLjIwMDAwMDgwMDAwMP/AABEIAKIBNwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEUQAAIBAgQDBQYFAgQEAwkAAAECEQADBBIhMQVBUQYTImFxMoGRscHwB1Kh0eEUQiNicoIVJJKyQ1PxMzQ1ZHODosLD/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMBBAUABv/EADERAAIBAwMBBgUEAgMAAAAAAAABAgMRIQQSMUEFEyJRYXEygZGxwTOh4fAUQiM00f/aAAwDAQACEQMRAD8AoR0rtG0od31rqaumO4hauKltEUJYFH4eyNDUoTOyOwlEpbkV3ZSTTCxhakqTq2E/9PJqe1gaYpg9dqJt2BzqBcq/kK1wM11bwkcqZXmUc6BvYsDnUkKUpE1u0KY4bBKwpInEQKIs8Xy+QrgJ05vgZYfBnUUNi1VTHSo146qjrNK8fxMMZ2JqDqdKo5Z4GuBxPiymKbNcRddvlVKw2NYHSp73DmvEvmB5hfnrNcMlpoyll2RZzcRxIgzsRB+BrizgUuEgrNI8NfeyqoQYWdT5mdPLWjrfaFB7LZW5yDqP8p5VwmVKcb7MonxHZ1NgCD5mocVwcCcqkGBB5edT2OKXrhDBVynQa/c0bgMQzWrlx1zlVlUHhe4ZgFV3KaMZG+UxNc2kFShXk7LIisnXK+kDeNj5mtXMC5zCJ86bNxbD27KtdtkXJ1VkZCTyyFzBI201kDWJpueC5fGoBVlOhADLIk5lJPiHlOxoHUisF2VGpHxNe/Wx57cwx1Ea6ekc/kKGfDk6/Z9PKr5iuzwILAeI9OdV/EcPZW1X410i5pKylgTLa5R99Kkt2vLWm9rh2hJMevUn7NbOEj0+9utIdkb9GpvskCYRspB5jUSAdfQ6GmvDODm543nLM+bHnr9a3gMIoOZ/h5/fOrDwyXIUDWPco5afTnVOpNye1GzDbShuePVkmGw+yga9ANFHWtZRJRNT/e5+/vlU91wJtWj53Ln8/pp6DzT8W4kADbtmAPab7/u8uXxNLVN/DHl8sryr7vHPC6L8sl4nxXKvdWjG+Z+gHTzOoH2arlu+SwyiCDI12jXMx2nnNRXGZzA2Gw+p86svC+G2cPhxisRBB9hAQS7A6SOgj2fKTyFW6VKNNWXJS1FfdHc1joEYvEkgYnFtIAARIjOdxCnkd4O/tNoAKqvEOJPfc3HJjkPoPqf4Fc8e4q+IfO5n8iiYA8vfueZFQ4JS5GbVVieQgctPLSn4SuzPipXsufsS4dy0zoI9wFSLnuArnKWUOdifZBIiY5uQIA/mstp3hYiLdpTLNGgnYAcydgv8mo8big+VFBS0p0UanzdtszH+KKMb5ZWrV1F7IfNkGO4iWXu0GW0IhSASSD7TNE5j5RpptQt3Ea5oAJ5DatukfSohZJ1o9qvcR3u2O1BuDedf1rdRK0CBWUVinJXdysq00TaWoESKKsqa5Fyo/IltCmWGt0Jh7Qmj8OhJAFSUqshjg7MmBTizaUb0Jhrtq2upGbefOlvFeNgHTSuM9wnUlZDq9iVSYpDjeMCdKR4zi7NzoMXCai5dpaLbmQ2ucTJ50JfxhJobNpQ1y7Fc2W4UV0Dxia6bGedKGvGtd6aHeN7hDNsT51DibhMEHUUCLhozA2mdgqgliYAG5NRe4XdqGQzCXWaBHiOkDnTf+oNoAT4uflXDWRh1j2rp5/2r5A/Wg5LGTJNGVGlUd0vD9xs3Fc6wyz9fXrQ9pZM7az76is2qKtkCiSFOMYYiF4Vx43u3cqorOZls0CSOuwJ0kwKJx/aOzbdruEtri89tEuISyXV7kPmcPbicylQQANFAggmlWOsMwQ2ozq2YAwJgGfEdANdZ0iZqPs32kTB96z4dC5fOp1aG12ZVIzAxqdBAieVbUSaNHQ01JevUOufibeFxTdsXLahkZURivgC5MviXVZkwQZk7aVpPxAa5cm4WtWmMnwB2IBBADzE6DWNNdDpSziXETxDE2WKwQoBMxmCyS0zoCW/Siv8AgNsOyi5mtkAOvMCT4iCZB0yhoqju3WT5N9UIRi5PhIvnBOLm8pJAgawNvF0aNeYjlEevd/E6kZQRBGo60q4JhUs2+7TaZ1MnWdJ3586NbqTpzP0HU1eimoWkeblCM9Q5U00gS/hlbcQB9xQWIVUj9B0/nzpuslScoAnw9fd+9KuIpl13Y7DpVWpNye2J6bQ6aFOO+bwb4Ng2xF5bSlc5BOuyqNzHP0p9iMRbtg4fDtoJ728d2Oxgjly09B51HC8MuFw6uQ0Es2oKctT5g8usV1j8fkXu7cwNzzJ6nz+XzGMbeFclnUyjJ7pPwrhevmxlxHiQCm3a0A1J56cz5/KY3OqdVZyFHnAHnzPU+dQWQ7ER985P3yFM7bC0IB8XPyp8Y7VZcmfKSm90naKOL1sWVIGrxr5UpvucoLEkalEJMSdzHIae+KNv/mbUnYdfM/5fnQyYYu0nc7mmwhtV2UtTrFUkoQwkD4XDM7H4seQH3yqbEYtQMqEgCR5mRBn3aURivAuVdvmfOlQtEn4n4a1yTk7vgCpWjGG2Ly+WEYributu2YCWwYVRAJJ1dvzMdp6CurJEDTXWT16aUM+GK6nfkPv7+uWGIMmnWMyUkuAq5bmgluyYG1cYvGT4V25nr/FQIxqRUYu2QxH1rKGzVlSTsFxXWjLAoa8sE0x4ZZLsNNP0qBtSVo3J8LYJPlU2IxKoInWuOIYsIuVfearuMx0mJrm7CadKVR36BWL4gx50BcxZNCm4TXSrS3K5oxoxgifvJqW2aHtrRKWzRIGVkbJrl7c1JEVw2IAqQE30Ixha77sCo3xFbsq9xgiKWZjCqNyfKhwMtLqSWLWZgFBLEwBzJ8qvfAeDiyuYx3jDU/lH5V+p50R2X7MLh0zPDXWHiPJR+VPqefpTY2qKKMPWa5TeyHHn5/wVLtJbJZdhFLLds9afcfteMD1oPDYZWbLnRTEw7gaHbTf30Tt1LNCTdNJI4tWjlBrtcOWOgM+XLzYkwo9TpRKXLKSr3FkAmLbBy3+gpmiZAzHQCeelcNhFKu1xmS2RmRC0K0aw28sB5fOhnUUFcdSozqStYkwb4EIwuubr/wCRBctgjkrEwzchpuTvUnDOy9rEn/l7JjfOsBtyPEdEQyD4DOx6Uou3bVuM2ZswBVWGgB1AGm09STVk4f2jFhZwq3bj5RAYsVYMQAWOY9S2ij2T0ArNrV9xv6TSd3n7hGP/AA/vq5vWLVpHQAQr+C4u5PijLcnlGX46BW+GXFI7xWVjMhxDD0IJDCREg8xXovAcNdt2la83eXmAZiep3Ef2oJgKOnnRvE8LayEtbUkDQlVJzcjrp8aVTkoy3Ms1ZznDu11ZSOH4XmRAFNcFwrvPE+lsbD8x8v3ozh/D+88TAhAdBzY/fOmWOvhF5TsF/jpVpzcsIqSp09Py+OSv8VuBNh4uQ6Uns4MsxJ1J3NOcRazEmZY86Wrxa2AqhgGMA6EDMf7V6mfWijC2FyLlq24738K6AvEsqLlXfmfoKSvh5MR4j+gp3iUkxGtC4hRbEL7XM9KaobVZclH/ADXWd5O0V/bIgUC2Mo9rmajuqAMzak7Dr5ny+dbQoFLMZbkuuvmx6D4mgcS+slpnz+nKmwgkVdRrJTxHCRtVzMSTJ50ZbOUQBQVi4oAiZ1nXTlED40XbeaNxuU+8kmc37IJEGdNTECeceVcf0yoQWnXkN4+/vrLccCoLGM7ts4AJE+0JGxBke+g6DFJt5x+AXFCZJ/8ASkeNxoYwvs9ev8Vri/Ey3gQ+DmfzR9KVpcipuW6VF2vIPRqlzRQltqmzVJzjkmttWVFm51lcdY2V1pnauC3bnrSyycxHrrXHEsRJjkK4Bwc2og3EcYWJpciEmjDZnWp7VsRtQNXZcjJU42RBbwdSLhhFEtcAFC3MRv8ApRWSFqU5G5Va02IFCNcrSiaHcN7tdSZ7s1DUqYc0XheFXLjBUUszGABzP38jUWbJ3xh1BcNhXuOqIpd2ICqu5J5D70g16p2Q7JLhUztDXmHibko/Inl1PP0qbsf2UTCLmaGvMPE3JR+RPLqefpAqwtRxhY852j2m6rdOk8dX5/wB3ABqTHrUCEMAwBg7TzHI+lc47hjXLivnhIhl11EzpyEg/oKnxGJtoYZ1U9CQD8KIzVaytllX7RWSX9/0qu2ULXLhFw5VXN0AELuOTA+HXkCdomzdoHBueEzqNvSqjxW+Uu3hsR4DPUZRy6Rp6VEz0ejT2K3Nju5xDIClpQoMzlG5ndmO7edbxHElZ810s0CMxLZVAA8KKojMW08pJIpS19Tq7yTy8/Ib0XhcKzqT3NxkWDrCW52BYtEgb+p5VR1EsG9oqdpeoTxO7aFoOHDOwQKp9sAKczMCSFmfpyNNbbtlR7DKVzZmXWQFIBEHlJI94pZxZbTEJb8aqmrqJGcgyMwkEzXOEwDMy3D4SMs8pIG/vrOdrJv9z01Gi5uyPYewWOdrfdvJNsDIWkkpGknrz946VZcTbzIQeakH3iDVW4TethVuL6zIEnbQbnppO5ozjHaDu7YZWFt2nItyNY8onUwPfOlIhXurS5M2vRfeeFDDFYsWwAdWjalbOWJJ3qXFNneeZ105en70DxHGd2IXetulCysuTy+qrbpNyeEI+1WNe2rIt0QZHsETM+EN+aOnnVb4fw57kFy1tljJESIMk66iKsGMeWGksP09OhqFmyzrqdSasxio8CnrHOGcJen7InQC2uUMWbmzGW186Gu2jE0Tj8dYOW3bKlpiec+Z5moHU7UyMTKqaiT6W8kKLzFdfv4UDf1p7ew/lQN/B+VEFTqpi6yrA6UxW5A0qIYciubiwOkb0LQ5yR3cvCJqr8b4xn8KHwzqfzRz8l+evvj41xbOSiexzP5v4pQ60qT8jT02mUfFLkKS7NaND23I+W1Sq1QmWXGwVZappoO21Tl6NMTKOSZWrKHuXIrK64OxhmDEMRQ18eI11h7sNHrWWlknpUEWtJtkaJNauX40FdXWJ20FCm1JrmMik8s1dxNRyTUxsgb1FdvAaCgfqOjb/VEtqxzOlToi+tA9+aJwNp7jqltSzMYVRuT98+VSmgZxfLYxwtouypbUszEBVG5Nendluzq4ZczQ10jVuSj8qeXU86i7IdmVwqZmhrzDxNyUfkXy6nn8AHj3gokkAeelMSPL9oa3vH3dPjz8/wCCasoXD41HnKytG8EH5VIwkgyYE6cp6mpMu1nZjDhGGW5cysJXKxiSNQV5g+ZpD2w4bh3wr4m0ro6XUVpYmZCjYkxo42jan3Z67/zATrauGfRrY+tJu01223DLjYZjcQ3k7xnBVgYQDKpUT/4fxNLk3u+h6Ts+lH/HTsuJZsr+nqD8A4Dabhz4kqDiMl+5bYliB3cqPBOUwRzB3HlSrsBw/huOD2r2Fd7wtvduXe8uKjrmGUKFuCDlZRsPZq18HR7dzhtnI5tthL4ukKSga4LTwzAQDKONetVH8IMIbOMxFk6smGuKfVXtKdOWopUpN3NqlSjHbjNrAnZ/GcLbGZVwTi1e/p7VpA5LpcdyrvccXJKnMv8AcfZOlOuP4XBJjbeCtYe4h76yt1+8co6XApKibhZT4hrAOmhqifhrZF3iGEtksg7wOQp0m0pugCZ0LIAfImrPgrxxfaAhpULiXnL/APLKcm8+13K5vUxHKtV8WF5mnp6dm2+ibOO1+Bs2sXfs2ly21ZbhAJPiKgkEzMyQdfzRtVs49wfA2ItjCuW7uUKu+UFswGhfWCJ1HOkN3BXL+OxN24oCm6yBQPaFs92D7wgPvq59qsThluBWu5b5tf4aQSN2CM0KcoLmJJis6UruahZtNcmvOfdqkrvh3s36eRvhl61awq3GtMSpVMqmWmAIXaBM6VNa4ZavuTdsyuUkK5zQREagnXU0g4TbROG3DjbzIpxBY3LZzmTkyxAaQTyis/Du5bN/E9xee7aynK7yGJ8BMiBsTvA3pkaaW26X7clKaxOSbw3nNvqWDB4ZQt13BcoswCVOgMjQgSYHpSC5iLL4q2ltSEZkVgWJmWMkGZ2jnyorD460MLiL9+69vDtas2cyeMo2Z1lBlJLf4tvdSNOcGgOAphrmMsf0117lsjPmYQcy52ywVGnhHLma0dPO8bvmxg6zTLckktqa+oNxq0lvFNZQEL3iruTocukkzz/WrEOGYIYk4VbbLcNsuGzsRGkwGY66jlVd4peJxLXMssb0af6gknXQAa1ZLeGH/Fy/PuCvu8B2qxK6+hRpShNtbVa6Sx7nm/aTFFVRRlVgeUzsATrJG3PqaiwvHgIzZzHtRlIjaYpFjnZrjE/mP7fHSoBPL0+NWFwV3po22yL1guM2rkjaJIJ5gc/4obGcbsBSVYMRyg9Y6VUi8bGufPccx9+VSLjooJ3uy4YHEpdti5oIHiE7dSeg86pvanj4ut3dnS2NzzY/RfnUPGMatwZLawg582Pv2Hl76VG0RSZyfCL2l0kIS3y56J9DkNNSO8hRGwj18RM/qB7qiKVqaWaPsbYRW0aKyZrnY1xCs8MnBqUNQqNXeaiTFuJMdayoQ9ZXXOswsoSZG9bW4F02nX+Kiw92t41SwBHKivi4vbmzJFuZtSBlHvqG/iQogVC16Egec0KaByGxp+fB3cvk1GTNdBKIweCe4627al2cwqruT9Os8hQZY26ijnBYV7jrbtqXZjCqNyfvWdhXr3Y/sqmESWh7zDxvyUfkTy6nn8AOux/ZRMImYw15gA7gaAfkTTbqdydTyAsGWnQjbLPLdp9p96+6pfD1fn/AFdvuXKLAgKZ565uugGg119OdcLhwpkiT1Op90613Yt/490dFtH45/wBqnurpTDLb24XkvsD5ulS2bhrm1h5NLcbxV0dlCrA01mfnXExg54RYeA4hFxQZ2VB3NwSxAEl7Wkn0pZxLDWrPD3wv9Rae5evWyuVgYE2gSddAMhMnqKr2Nx7XBDACOg8xQJSTE7xsOXMwPKgcM3ub2jm4UlBrOV9SydvO3V2xilXDYhFsWksm4qhGzy0kKxUz4IEKedT8JTD2uOYtrV23kvYNrki4CvePdXOA0nWVLZeU9K847TWRn8JIyhVytoRAyxHPYcudd9juGN/jXYMLbIBWNW3gdSIHLciqja3bT0kE1S7x9Qj8NLBs8SwjXmVAM5JZgMoNm4BnM+GdN+o61a+x2DH/ABe5iGZQn9RiipkQc/egMW2IIOnrVX4NwW272nuLcKmWYD23JnLEzu0ddDpNWDtO/wDSlUtJFxk1TMGCGSPEwCz4QDEbkjlVGpUlhR5TN2lRhFeJ23RaLR2xxaYWxfvJdtPcBLKmYFpdwBCgyYzT7qg7acLTEXf6pMXZGSwFyBwWJQ3H0AOpOaB5iqRhOCW7y2e+F572JGLIurcULa7hWKSmQ582XXxDfSk2De5ba3Yt2y9xyghdyToFHvqI0YwTssy5yIWXfd8PVott/iCDgl1BdQ3RfU5AwzwCk+E6nSf1rf4QcVt27zo1wKBYuHM5CKXL29BO5/aq1204Hbw/csjlrlxL5vN/bnRssWtASgJyhj7UTsaP7J8Aw1zDl7ouyudrl0OFW0uUZIQoxu3GbNC6TpE6kPUL2t0K9WtFRd3htln4DdHEOFYixcvWbF17y5cxCgZO4uTkmTqCNOc+lQdh8IuC4hbw7Yi1dUW3ui5bYZAGFxChM6EMAf8A7gqhvcbvAJAJ5mRBMBoza++OtCWrzWMZnym3rLBxllf7o11zQY6mKZTxhlPUeKD25d7pep6/xTha23N0X7TzdBCK0t47o2E+Yp5iXspizjXxNkW1tMuXMC0nLqIOvs7DeRXmQxtu9csiy8gMxYiP7d1bmBt5GaGxd8MjifY8O255GOQNXFHcuTz8andStss7p2vwxTnBZjyJJj1mss6Btemn1rlUiaieQD8KcMj1JLTifESBlIMRtvHypfj8cXPKAANFVQYEDRQB79zuajxmLLaD2R+tDNeHKglK5Zp02ss2V6aVkkVvvR0qRQCN6EY3bkhuQdhG1RulSXFmos5HmKFhp3I63OldsAdRXAFQEbUV1WKK6y1JDZyp1rK3FZXHYCTbqRKnaxWu6NMsVXNMCxtmdaHFg02FquhhySABJoXC4ca21WFeGwFy4yoilmYwAOZ+nrXq3ZPs1bwVosSGukTcfkF3KJ0XqdyR6AV3gcWNQoLndvLoOg+dNOLYly8Zmy5RoDpr896ONO2TK12pqVv+OLtHr6/wXJLgGhI+P3zrpXBEgg+hBqoYK4xtsCSdQdST12mmvCGKq+vMfI0djDnp9t8hGExam/dM7rZ//pR7oZqu4LS7cP8Alt//AL1Z0vzFQRXik7ryX2BMdjRaCgqSTJ35Cq1j72a4zdTNOu0DSVjoaR3U1qUW9JBWT6kQTUeHN5a6+sGaHJYGVkHYEGN9N/QxRxY+lcLIZmjNCu0dSFJGg86CTwa9CPiSXJUuMX2uXbijKczlpBbwgExMgco26jnpXpXYLhCthrTDVI0HMt/eW/3SPdXmnDuFEtmedT7J3J/zV6f2Tvd3bxFjP/iIwXT+wkMpYT5rp6Vk943PbHqe01WlhR0inUxa2PNe3zJOO8RKPntnxADIQNgRo23WY9KofaDid1roZyC0BWyrbURqdlUAtzkyasfanEMC6jw5BaCnorCNDOpDGfjVAxl5hI2Ma6yAfI9DFMjQ2LPUp0tV3z3cJWHI7SXbNrurd3k8+G2SneDxBHK5lkHXKRvSMYtluBwzI6nRlJVlI6EGQahzGJMhhrPPqDp67+VCF/dXbA3Uu8DjiPFrmJNtLt17uUwjOxZhmnwlm8TAsREkxrFd8L7W38PaewlwBCc6g27TBWiCR3iN4iIE9AdqQ4jF6DQBhzGxjqORrnuc2ZlPhJEzHh1khpOg3150cVYRUkpKw14rig9pbqoA4yq5jYmTIO+8iD1WlX9W915dizHy8ydBy16edPOG8BuXsNdyAkpkI0PiK6mJ/wArH/pA0qvzdssRDI2kggg9diNKY11KdKUHeKfDLX2NtEEnOgDEyAw7xYRiSU9oAwuu3hiprjtLKRALTHpMfOq3wnHXEZmtkd4wPiKqSCIIKEiVO4kQY9Yph2fvF1csTuWznmSZYk9ZP602lN32lXVadK9S/kM1AGpERr9zSPinEw/hU+H/ALvXyrOLcRL+BdFH6/xS82udMnK+ERQo7fFLk3DH0rEWpksMdKKXA6azQqI6VSMQZLQNaaxGxqZsHFcnCnkTRWBU15kBU1wVotbR51zdjYVDQSnkDroCti3XQShDcjSCujXQWsIrgLnEVusisriblhNmsWxJAg60yNiDU3D7GZgMp+Bj404x3Vsrg1ngrNGXc1YcBwFbaw0MxEkx05Dy1FGYPBi2NN+f8Ug7UX8QSe7uqqgaKCcxkagwNtOZruCopzrz2KVkMbmDtSUzLm1MSJ/ipjaRtJBMct6oSW7k676TmOuuo1jWQabYLvAucG2ukTn8cDlA1AkdKm46po3H/YtVrAADQmiMHYyyCRPrQFjiyhQGbOYGqj3E7/tR2FQXBmU6THv6VNzPqQml4uDOH2f+YuA6eC382pmqECQeVA8Ptlb7g/8Alp/3NTS3eUncEAGfTTfoPOhbFyi5SSXkvsAY2zmgkydvIDp9/WgMRYEaDWn3fL1X4ioMWiE6GR6j5VFyxRlJcorGUzsaddm+DlmF15AGqrsT5notNuF8DVjnceH+1ObevlR2PtshIQeMj3AffKq9Sbl4YnotLGnTXeVHYqnaDgT27yvZUXC1xJ8RLIC0lmkaqB7+s04wmBto9x0UB7rZ7hk6ttPlz26mh2F21q0tmJk6/OPX4URhr/TeopUIw46lftLtSvqrKT8McL29fMrP4gXTZjLu4UN5qpJPqQcv/X6RQsW6+GM2g00UGBPMak/tV2/Ei25NszpkfTTUll3PQR8WFUO8GX2gdeW0+kCiqYLugmpUYsFF2DuQCIrWJYZYHUmSoB10idyNNvM11w6wty/atvIVriKY3hmA0+NOe2OAGGxWRR3dtlDKSJgR4gs+1qNB1jWKUo4uWqldKoqa5ab+hWCpKzy+fpXNnY+gH61q5cZjqSRypjwlFQi8VD92yM1s6AjN16fKRINSuSZOyyet8HwndYO0AIPdo5EbswDGfeaS/iMmfCiVGcOHAY6gBTmMDlBj4VbrsMq6QCAQCI5aD+K83/EHG3jdaxcCZTluW3AYNEaoTMbzsNwvWrFRtQsjy/Zq73Vbm7Wu/f0Kvea2WLWlKpOgJkgQB4jzJiT6mjmxLZFQCBlnlJBJIBjlH0qKzwctazAeLeDtHQ+fOs4R43QMdGIUT1PT3xSopxaPQVJQkm1mxEQD5VjWelGcUwBt3Cp3U/yKmwGHz6dSKfYrOolHcuAzs7wg3NTTu/w3KDppy8qYcNsLbQAUVdsZxUmJW1MpVL9CkYjBmdKFayateIv93Nte7LESA3z0pHkYiWAzSelSXadWTV2K71s0JcSnNwUM2HmoaLMKluQBU6Vs2qLWzW2t1Fg+8AClay0S6VrJUWD3g+Wt1OErdTYncPm4i9whRqenXz9KZYy4bCZM5W7/AHECY02APL/1rWEwSIumrnduXoPKhr+CzmARPy99GkZN4N2SwhLjOKXCYLuZ/MxP6bVHa13afl8KsFzhNoAQMzcyf19ajt8LEaDWTpEALHPqST7o5zp1iyq9PbhWFKMC3I+snU+houxgmgGDB9YmnWA7PA+IwKeF7VpQqqCd43G3IURVq6tLEVcq+Gwj6KinaOk8yT7z8Iq5WHt2EQEFV5wGYSd9dTv1oOziAd4XyAH6cv0oy01vmM3+ozr6ftFCytVqSqYksGsNibbX2YXVAKKupgmCdNaaKOjA77dP2pY9sAsWTvAQOUsInTqdzrv86HTB2mb/AMsRoqt4pnUmNvSaFgd1F5yrL3LAtuiBg4XNAJ5DXf36UisWWtEOLlx15Lm0PvMyP2oy/wAYuga29eQkQB98qTKTk7I0KOj7lKpNp+Sf5QxbEOCCCM50g7L5/tUGKckeLed9yeZpMOK3tYtnc7sCa5xHEbpibeo6n+KKNOwqtVnUlnjpkaXcRsPEANgdOe9aV1WYA6/WkeIe67DNoBtlMco30rm3btNdZAWLgc2beNpnU/fWmqKRUnFvMn+TfbvC3LuGZ7anvLeoAgkqdH/TxeqivKbuJAGoM9SdSevU17M1tQIaMoBzSJlY1+deIcQS5nMoYBKiFyjTSBAjz99IrLhmx2RPdCUOid/qHdjrefHYcR/4it/0+L6V6F+KHDQ+GFwhZtsTOkwwIy+hbLoPKvO+xRb+tshdCWPwg5h8JFexY7BC7ZNq4PCwgxIPXQ11NXg0L7Tqulq6cr8L85PC8stA2kCnvY4C7jLKZVIziVOuYD2p0gwAWjypZi+C30LZrb6bmOWsGBsNKd/ho/d45GLZVKXATyICFoJ/2z/tpUE0zX1Ek6Mmsuz+x6tibMy5IVVEknYVQO02KTEsgCeG2TlbUMSTqfIaDTy+B/aPjhvEohItTt+YjmR06D7CzD2RVrnk89pqfcpTfIRwlCDMcxp5VWuN4LuMQ6DRSc6AGPCx292q+6r9wHA5m8hvS/8AEnhD3AjIM7JMKoloPtAAanWD8aGorq47S6tLUbHw/wCoQ8XxRvql4gBiCjRtmQ6H1KFT7654JbOYR1FEYHCn/h7sRBW8ZB3BACsCv9pkjfX3RUnZfC536c/hUx4H1pKMJJcJ2LErxpXLY3lXGKWOc+YoG6OdEZkYKWTm7wxA/eoCG1kTpLbnWhr1onkaY4d+VcYpo2rh6qSvZ5BsNwqRqYNZjOEsPZE+Y2/WpFxJmamucSXKQSak5ynfBXblsiZ3qNa7xl0E1Cqk8qgvxTtdnFwVETU12w3pQ13wiTXDY5O1atVCGNbqLjNpeMums++tCzXIYc5n73rXe025jtPoEyF5+/r8a3bYnaI5T9KCN3xaxOkDpU6PJg5jpAiBr5jXSuucqZOmKfQCCvXfbr+1GYRSZJMlj8f4gUPYsztvvy95JrkkzvQvJO1W9A5CpMEgecH5CsF3pQrAiN9q6V5j7+FQDGniwws4htgNdB7zTHB2s0G6JU7AgfWs4JwctFx9F/tEwWP7VJjuIoB4VU7SQwhRrBbTy2pMpXdkWqVJR8TXH7HN/FKp2M8ttBy0+lB3MU3jC6kZTJ2Jb0mlmI4ooveJwyakwpBn8kkA9NY61Jch9n9sBlAmDzgA6kjejjG2AK6crSlx/eQ83Sp/aprVrvAT1FLbeDBMEsD6j9KmxV8WgBmYL0A1jQHXluNaZYzZyu7ReTjDrbsu5aUWBCsxY6Eiegn6c6kwN+1cm6p3JHUaQJ8jEe6qZjLZ0Pe3CJMZtYnUnf4044Kyr/hrc0XrALfmKzGgNdYdVoLZuu2/wWDid5ktOyZS8QssQJYhRy31n615BieCXF1zANrO459R8a9H7T4o2rVpphDdBJnkFZl8Q8wPhVRx2Pt3ZKk9IJB06yOdIq8Gh2SnCF1w/wAEP4eYd/65cwzG2txtdRquWZ/3CvVsJfZ/BAkyJ5ARrPxHxrz78PbQzX3VRottAx1OpYtGvOF+Aq2JjXRsqgkZTJCjc6yRPQgaA7HQ1EXthcnUU419bn/VL/057XuiwEy955qSrLsRttqPQmqNhcKDczqCBDA8hmneOpU/xJq19p8YEw+bMTcYlQXUysiVABWRJHMaabVSFxd22MsxqSRE6k6/Db3VEFZ5Lsm3BxjjoP7GHk0bZw4GpI0qtWOJXjqp05+z9VFBYhrjE53uEbxm09wLRTtxT/xZSdpSSL3w/j9pDAuLJ0id9YqbEcUBbMa86S0vN2B33B+Bzb0Xbvuuq3GadBmbN0nQmKjcBLs6F7p/UfcRxQF26qkZb6h4JiHSA0f6gQfMitcOuJaXxNEzoKqnFu9uAOwJCcwBpMTqPvSu8K91xmDCOclB5cz1oVKzsWpaRSgs+/y4/Yuf/FlIhP1rlsSY1iqvYS8YIZYIkEsv0BNGNaxemQi4p2ZMpBjfkCI8+lHuKz0aXDQ1ONVT4mC9J39ajxHEbZjxrHv/AGpamCxJJL220A1MLpr13rX9JdGpQlRvENy0kKTXXJVCN+foxguNsAauD7m/auHx2H5t/wDi/wC1JMTiRoACpEzO+vL3UFdxPnUOQ6GkT8y0I1thKAR+o9RuK4uiNBVbw+JKtKtHnvpG3OjrGJuMCS4Cr7TQIA/foK5TJlpmnh4CsS0CTsOf71XcfjS500HTr61JxPiBuGBIUbTu3+ZvPy2FL6TOd8IvaehsV5ch3D8WBo+3LyrdALWVCqNKw2VKLdz0ljueeutafY+n0rKyrpgdRbb3qw4TYffIVlZQjanAQ1RWq3WVxXXB01GYTdP9X1FZWVEuA6fI/wC0l1gogke89Kp3EXOW4JMSDE843rKykU+Wai/Qj8xRe9g/fMUy7IMTeSTMK8eWnLpW6ynlTVfoP2Zcr6gDQRSrjGuFunmFEHnvyNarK5cHn1+p80VFvaX/AHfSiuIKO9Gn5fkaysozTlyvZ/cYcd/+H3PJ7ceXjXbpXn9xjmfX+4/M1lZVeryW+zf037v8Fs/D3/3e9/8AUH/bR2OuH/mdT4bMrr7JyHVenurKyhl8CGUf+1P5C2+fHa87lsHzGXY1V8bebx+I+2eZ/MaysqOhZh8R3gkG8CZrsb/fWt1lGuDpci7H3CNASAQJAMA68xQY5VlZS3yW4fCjG3Fa5fflWVlC+QkdZzESYrt77CIYjTkTWVlQiBnwy4WtPmJMkTJnpvNLsR7XuFZWUb4Fx+KRzavMSJYnUbk0Rc9j3Vqsrl1CnyiC37Xuo/if/sLPmWJ8zA1NarK5/CwX8a/vRieuhWVlLQ8w71lZWVJx/9k=",
    title: "Battlefield 2042",
    genres: ["Экшен", "Шутер", "Война"],
    video: "https://www.youtube.com/embed/ASzOzrB-a9E",
    price: 2433,
    id: 2,
    description:
      "Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.",
  },
  {
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/936790/capsule_616x353.jpg?t=1666713640",
    title: "Life is Strange True Colors",
    genres: ["Глубокий сюжет", "Протагонистка"],
    video: "https://www.youtube.com/embed/b6CkzwVAr0M",
    price: 3021,
    id: 3,
    description:
      "Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.",
  },
  {
    image: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg",
    title: "Grand Theft Auto V",
    genres: ["Открытый мир", "Экшен"],
    video: "https://www.youtube.com/embed/QkkoHAzjnUs",
    price: 789,
    id: 4,
    description:
      "Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.",
  },
  {
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/359550/capsule_616x353.jpg?t=1683930161",
    title: "Tom Clancy's Rainbow Six® Siege",
    video: "https://www.youtube.com/embed/6wlvYh0h63k",
    genres: ["Тактика", "Шутер"],
    price: 982,
    id: 5,
    description:
      "Tom Clancy's Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.",
  },
  {
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/capsule_616x353.jpg?t=1671135934",
    title: "Assassin’s Creed Valhalla",
    genres: ["Паркур", "РПГ", "Открытый мир"],
    video: "https://www.youtube.com/embed/ssrNcwxALS4",
    price: 2863,
    id: 6,
    description:
      "Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.",
  },
];

function Home() {
  return (
    <div className="home-page">
      {GAMES.map((game) => (
        <GameItem
          img={game.image}
          price={game.price}
          title={game.title}
          key={game.id}
          video={game.video}
          genres={game.genres}
          description={game.description}
        />
      ))}
    </div>
  );
}

export default Home;