import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./PetitionPage.scss";

const PetitionPage = () => {
  return (
    <div>
      <div className="main_div">
        <h1>
          Считать недействительным письмо в МОТ от Республики Беларусь, ввести
          экономические санкции
        </h1>
        <div className="photo_and_votes">
          <div className="photo_date">
            <img
              src="https://www.rei.com/dam/van_dragt_042618_0158_outdoor_photography_editing.jpg?t=ea16by9xs"
              alt=""
            />
            <p>Создано: 22/01/2023</p>
            <h5>Name Surname</h5>
          </div>
          <div className="bar_and_text">
            <ProgressBar now={40} className="bar_progress" />
            <div className="bar_texts">
              <p id="signed">400 signs</p>
              <p>1000 next goal</p>
            </div>
            <p className="weekly_signs">На этой неделе подписали 213 человек</p>
            <button>Подписать</button>
          </div>
        </div>
        <p id="petition_full">
          За непризнание письма трудящихся Республики Беларусь Уважаемый Гай
          Райдер (Guy Ryder), члены административного совета и бюро: Мы,
          граждане Республики Беларусь, обращаемся к Вам с просьбой признать не
          действительным и не принимать во внимание отправленное в адрес
          Международной Организации Труда письмо, от "Профессиональных союзов и
          трудящихся Республики Беларусь", с призывом оказать влияние на
          правительства стран, которые ввели/вводят экономические санкции в
          отношении Республики Беларусь. В письме говорится, что Европейский
          союз и США необоснованно, без каких либо подтверждений, вводит санкции
          в отношении предприятий Беларуси.
          <br />
          <br />
          И заявляется, что введение экономических санкций в отношении
          белорусских предприятий не является выражением требованием трудящихся.
          Это все ложь! Именно трудящиеся в августе 2020 года вышли на улицы и
          временно смогли остановить беспредел сотрудников силовых ведомств
          которые убивали, избивали и насиловали женщин и мужчин, закрывали их в
          заточении без еды и воды, при этом продолжали избивать и всячески
          издеваться. Работников организаций заставляли подписывать данное
          письмо. Помимо этого, текст письма меняли, расписываться заставляли в
          отдельных листах. Мы даже не знаем к какому документу будут приложены
          данные подписи. Под угрозами увольнений, применением в дальнейшем
          жестких мер к работникам, не продлением трудовых контрактов,
          уменьшением заработной платы, психологическим давлением и пр., людей
          вынудили оставить свою подпись. Из-за страха подвергнуться давлению,
          страха потерять работу и дальнейшей ответственностью перед своей
          семьёй, часть граждан не может публично и открыто заявить о своём
          отказе поддерживать государственные инициативы и предложения. Для
          этого мы создали эту петицию. Сообщения от работников (текст от
          первого лица, имена изменены):
          <br />
          <br />
          - Меня зовут Славомир, работаю в одном из отделов административного
          корпуса. Ещё с конца прошлой недели проходил сбор подписей под
          каким-то письмом за отмену санкций. Сообщили, что это добровольно.
          Естественно, подписывались единицы (в нашем отделе никто не подписал,
          включая руководителя). От увиденного итога генеральный директор
          взбесился и начал угрожать. Руководителю сказал, если он не соберет
          нужное количество подписей с отдела - лишится должности. А нам
          сообщили, если вы хотите сохранить свой отдел - должны все подписать,
          либо отдел сократят. Дополнительные угрозы, что не подписавшимся
          отменят премиальные доплаты до конца контракта и продлевать его не
          будут. Так всем отделом и подписали...
          <br />
          <br />
          - Меня зовут Мария, я работаю на одном из госучреждений Беларуси.
          Начну наверное с того, что после всех событий августа и последующих
          месяцев, у меня начались серьезные проблемы со здоровьем (меня
          задерживали на марше солидарности, ударили несколько раз дубинкой и
          тд). Я плохо сплю, мне снятся люди с дубинками в чёрных масках. Мне
          страшно ходить по улице, когда рядом проезжает микроавтобус. Но на
          этом мой кошмар не закончился: в какой-то момент на работе меня начали
          принуждать подписать письмо, осуждающее санкции против режима
          Лукашенко. Мне подсовывают письмо, в котором говорится что "народ
          Беларуси осуждает санкции и просит их не применять". Я сначала
          отказалась его подписывать. После чего меня на беседу вызвал
          заместитель директора по идеологической работе. Он сразу припомнил,
          что я молодой специалист и у меня еще большой срок отработки. Сказал
          что меня выживут отсюда, и что я должна буду вернуть государству за
          своё обучение все деньги, а так же - ещё штрафные суммы. Он также
          добавил, что знает, что я одна живу в этом городе и родные мои далеко,
          что мне никто не поможет и я окажусь на улице. Затем он сказал, что
          они совместно с КГБ узнают, кто написал письмо с отзывом своей подписи
          и если посмею это сделать, меня тоже сразу уволят. Я плачу, а он
          просто подсунул лист со словами: "подписывай и выходи отсюда"!
          <br />
          <br />
          - Надежда, работаю в отделе маркетинга, до пенсионного возраста
          осталось меньше года, я уже все повидала мне бояться нечего,
          категорически отказывалась подписывать эту бумажку в которой от народа
          Беларуси обращаются в Международную организацию труда и просят
          отменить экономические санкции. Я не прошу отменить санкции, это
          действенный способ надавить на Лукашенко! Мне стыдно, но меня все же
          сломили! На производстве работает дочь. Внуку всего пять лет, у дочери
          через два месяца заканчивается годовой контракт. На это сначала не
          давили, а потом начали, даже подумать не могла, спрашиваю причём тут
          дети? В ответ я услышала: "все в ваших руках, подумайте про дальнейшую
          судьбу своей дочери". Простите меня, мне очень стыдно, но я
          подписалась.
          <br />
          <br />
          Спустя не продолжительное время, к людям покинувшим свои рабочие места
          начали приходить сотрудники силовых ведомств. Федерация Профсоюзов
          Беларуси управляется ставленником Лукашенко, профсоюзная организация
          не оказывает защиту прав трудящихся. Руководитель Федерации публично
          поддержал Лукашенко и отказал в поддержке рабочих. Работники лишены
          возможности уходить на забастовку для защиты своих прав и интересов.
          На объявивших забастовку граждан часто заводят уголовные дела и садят
          в тюрьму. Многие граждане после этих событий вынужденно покинули
          страну, часть из них арестовали по ложным обвинениям, остальных просто
          запугали. Сегодня, в Республике Беларусь, при виде сотрудников милиции
          любой гражданин испытывает чувство страха, что его сейчас похитят,
          увезут в неизвестном направлении, будут избивать и унижать, а затем
          посадят в тюрьму. При воспоминании жутких кадров беспредела
          подвластных Лукашенко людей у женщин и некоторых мужчин, не
          произвольно текут слезы. И это не удивительно, ведь беспредел
          продолжается - людей продолжают задерживать, избивать и садить в
          тюрьму, а 12.11.2020 года после избиений умер Роман Бондаренко... В
          условиях жесткой диктатуры Лукашенко, подвластной ему законодательной,
          исполнительной и судебной власти, ежедневно нарушаются права граждан
          Беларуси. Отсутствует правовая защита, свобода слова и волеизъявлений,
          не согласных привлекают к административной ответственности и сажают в
          тюрьмы. В стране происходит внутренний террор, без внешней поддержки в
          виде экономических санкций на режим Лукашенко, белорусский народ будет
          истреблён.
          <br />
          <br />
          Народ Беларуси ЗА введение экономических санкций до тех пор, пока
          власть в стране удерживает Лукашенко! Наши подписи под письмом от
          "Профессиональных союзов и трудящихся Республики Беларусь" получены
          незаконно и являются фиктивными!
        </p>
      </div>
    </div>
  );
};

export default PetitionPage;
