import Back from "../../mods/back";
import type { Route } from "../writing/+types/some-poems";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "כמה שירים (Some Poems) | Henry Wandover" },
        {
            name: "description",
            content:
                "A personal site made by Henry Wandover, for Henry Wandover",
        },
        { name: "keywords", content: "Computer Science, Writing, Blog" },
        { name: "author", content: "Henry Wandover" },
    ];
}

export default function Writing() {
    return (
        <div className="content">
            <Back />
            <h2>כמה שירים (Some Poems)</h2>
            <h4>
                The original Hebrew and its translation. I'm still in the
                process of learning Hebrew; these were an exercise in writing
                and translation.
            </h4>

            <br />

            <p dir="rtl">
                אני מסתכל על מסך המחשב שלי במשך שעה. אני לא יודע מה לכתוב. אני
                לא יכול לכתוב. אני חושב שהקירות סוגרים עליי. תודה לאל שאמא שלי
                שולחת לי תמונות של הכלב שלנו.
            </p>

            <p>
                I stare at my computer screen for an hour. I do not know what to
                write. I can’t write. I think that the walls are closing in on
                me. Thank God that my mom sends me pictures of our dog.
            </p>

            <br />

            <p dir="rtl">
                ב-8 בדצמבר הרגשתי רע. נסעתי לפילדלפיה סוף השבוע עם חבר שלי ואני
                לא עשיתי שום עבודה. הייתי צריך לעשות את הסרט שלי לכיתה אבל אין
                לי רעיונות. מתי זה נהיה כל כך קשה? אני לא מרגיש אנוש. החיים שלי
                הם חיים של מכונה. אני חי רק כדי לעבוד ולא שום דבר אחר. אני מקווה
                שאמצא את הדבר הזה, הדבר שהופך את העבודה לא כל כך כבד.
            </p>

            <p>
                On December 8th I felt bad. I went to Philadelphia on the
                weekend with my friend and I did no work. I needed to make my
                documentary for class but I have no ideas. When did this become
                all so difficult? I do not feel human. My life is the life of a
                machine. I live only to work and nothing else. I hope that I
                find the thing, the thing that makes all the work not so
                difficult.
            </p>

            <br />

            <p dir="rtl">
                פעם הייתי מאוהב. אבל הייתי ילד ואני לא ידעתי את כל מה שאני יודע
                עכשיו. יש לי הרגשה שזה יקרה שוב.
            </p>

            <p>
                Once I was in love. But I was a boy and I did not know all that
                I know now. I have a feeling that this will happen again.
            </p>

            <br />

            <p dir="rtl">
                שאלתי אותה מה הצבע האהוב עליה. היא צחקה. הטלפון שלי זמזם.
                הסתכלתי על זה, חבר שלי נהרג על חבר אחר שלי. אמרתי לה, אבל היא לא
                הגיבה. היא המשיכה לדבר על מצרכים.
            </p>

            <p>
                I asked her what her favorite color was. She laughed. My phone
                buzzed. I looked at it, my friend killed another friend of mine.
                I told her, but she didn’t respond. She continues to talk about
                groceries.
            </p>

            <br />

            <p dir="rtl">
                בלילה הקודם, הייתי חולה, חולה מאוד. אני צריך לזכור: שכר לפני
                בירה.
            </p>

            <p>
                The night before, I was sick, very sick. I need to remember:
                liquor before beer.
            </p>

            <br />

            <p dir="rtl">
                האוכל פה, בבארד כולג, לא טוב. כולם יודעים זה. שאלתי חבר שלי,
                <br />
                “האם אתה רוצה לנסוע למכדונאלדס?”
                <br />
                הוא אמר, “אני מניח, אבל מה עם ה- E. Coli?”
                <br />
                “כל בסדר, אתה כבר מעשן סיגריות כמו ארובה, למה לצייר כאן את
                הגבול? ואני חושב ששמעתי שהם עשו משהו.”
                <br />
                “בסדר, יאללה.”
                <br />
                אבל לא הלכנו. אני חושב שהרעיון לנסיעה למקדונלדס טוב יותר מהאוכל.
            </p>

            <p>
                The food here, at Bard College, is not good. Everyone knows
                this. I asked my friend,
                <br />
                “Do you want to go to McDonald’s?”
                <br />
                “I guess, but what about the E. Coli?”
                <br />
                “It’s all good, you already smoke cigarettes like a chimney, why
                draw the line here? And I think that I heard that they did
                something.”
                <br />
                “Okay, let’s go.”
                <br />
                But we did not go. I think that the idea of going to McDonald’s
                is better than the food.
            </p>

            <br />

            <p dir="rtl">
                לפני עברית, אני למדתי איטלקית. רק לשבוע. רציתי ללמוד איטלקית
                בגלל החברה שלי. אך, כמו הרבה דברים, הזוגיות שלנו נגמר .שניסיתי
                לבנות מחדש את מה שכבר היה שבור. אני חושב מזמן לזמן שאני לא נכון.
            </p>

            <p>
                Before Hebrew, I studied Italian. Only for a week. I wanted to
                learn Italian because of my girlfriend. But, like many things,
                our relationship ended. I tried to rebuild what was already
                broken. I think from time to time that I’m wrong.
            </p>

            <br />

            <p dir="rtl">
                דוד אמר, בזמן שהוא ירק פיסות אוכל בפני שלי, "החלק הכי גרוע בחיים
                אי ודאות.”
            </p>

            <p>
                David said, while he spat bits of food in my face, “the worst
                part of life is uncertainty.”
            </p>
        </div>
    );
}
